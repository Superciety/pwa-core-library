import platform from 'platform'
import {
  IDappProvider,
  ExtensionProvider,
  Transaction,
  IProvider,
  ProxyProvider,
  Address,
  Account,
  SignableMessage,
  WalletProvider as WebWalletProvider,
  WalletConnectProvider,
  HWProvider,
} from '@elrondnetwork/erdjs'

const WalletAuthStorageKey = 'wallet_user'

export type WalletProviderId = 'maiar_app' | 'maiar_extension' | 'hardware' | 'web' | 'empty'

export type WalletServiceConfig = {
  GatewayAddress: string
  WebWalletUrl: string
  WalletConnectBridge: string
  WalletConnectDeepLink: string
}

export type ProofableLogin = {
  signature: string
  address: string
}

type SerializableProviderStorage = {
  providerId: WalletProviderId
  address: string
  addressIndex?: number
}

export interface IWalletService {
  readonly provider: IDappProvider
  readonly providerId: WalletProviderId
  init: () => Promise<boolean>
  getConfig: () => WalletServiceConfig
  onLogin?: (proofableLogin: ProofableLogin) => void
  onLogout?: () => void
  login: (proofableToken: string, addressIndex?: number) => Promise<{ walletConnectLoginUri?: string }>
  logout: () => Promise<void>
  isLoggedIn: () => boolean
  sendTransaction: (transaction: Transaction) => Promise<Transaction>
  heartbeat: () => Promise<void>
  getAddress: () => string
  isMobile: () => boolean
  getHardwareAccounts: () => Promise<string[]>
}

export class WalletService implements IWalletService {
  public readonly provider: IDappProvider
  public onLogin: (proofableLogin: ProofableLogin) => any
  public onLogout: () => any
  public readonly providerId: WalletProviderId
  private config: WalletServiceConfig
  private proxy: IProvider
  private address: string | null

  constructor(providerId: WalletProviderId | null, config: WalletServiceConfig) {
    const storedWallet = this.loadFromStorage()
    const isLoggedIn = !!storedWallet
    const proxy = new ProxyProvider(config.GatewayAddress, { timeout: 5000 })

    providerId = providerId || storedWallet?.providerId || 'empty'

    if (providerId === 'maiar_app') {
      this.provider = new WalletConnectProvider(proxy, config.WalletConnectBridge, {
        onClientLogin: async () =>
          this.finalizeLogin({
            signature: await (this.provider as WalletConnectProvider).getSignature(),
            address: await (this.provider as WalletConnectProvider).getAddress(),
          }),
        onClientLogout: async () => this.logout(),
      })
    } else if (providerId === 'maiar_extension') {
      this.provider = isLoggedIn ? ExtensionProvider.getInstance().setAddress(storedWallet.address) : ExtensionProvider.getInstance()
    } else if (providerId === 'hardware') {
      this.provider = new HWProvider(proxy)
    } else if (providerId === 'web') {
      this.provider = new WebWalletProvider(config?.WebWalletUrl)
    } else {
      this.provider = new EmptyProvider()
    }

    this.config = config
    this.onLogin = (_) => {}
    this.onLogout = () => {}
    this.providerId = providerId
    this.proxy = proxy
    this.address = isLoggedIn ? storedWallet.address : null
  }

  init = async () => await this.provider.init()

  getConfig = () => this.config

  // depending on the provider, login might be a 2-step process that ends by calling finalizeLogin()
  login = async (proofableToken: string, addressIndex?: number) => {
    if (this.providerId === 'maiar_app') {
      const loginUri = await (this.provider as WalletConnectProvider).login()
      return { walletConnectLoginUri: loginUri + `&token=${proofableToken}` }
    }

    if (this.providerId === 'maiar_extension') {
      const extensionProvider = this.provider as ExtensionProvider
      await extensionProvider.login({ token: proofableToken })
      const extensionAccount = extensionProvider.account
      this.finalizeLogin({ signature: extensionAccount.signature || '', address: extensionAccount.address })
    }

    if (this.providerId === 'hardware') {
      const login = await (this.provider as HWProvider).tokenLogin({ token: Buffer.from(`${proofableToken}{}`), addressIndex: addressIndex })
      this.finalizeLogin({ signature: login.signature.hex(), address: login.address }, addressIndex)
    }

    return {}
  }

  logout = async () => {
    await this.provider.logout()
    this.clearStorage()
    this.onLogout()
  }

  isLoggedIn = () => !!window.localStorage.getItem(WalletAuthStorageKey)

  sendTransaction = async (transaction: Transaction) => {
    this.ensureLoggedIn()
    this.ensureConfiguredProxy()

    const address = new Address(this.getAddress())
    const account = new Account(address)

    await account.sync(this.proxy)
    transaction.setNonce(account.nonce)

    if (this.providerId === 'maiar_extension') {
      // workaround! in the current state, the extension window stays open until the transaction is fully executed
      // - IF we send it directly using sendTransaction() like below
      const signedTx = await this.provider.signTransaction(transaction) // extension closes after signing... yay!
      await signedTx.send(this.proxy)
      await signedTx.awaitExecuted(this.proxy)
      return signedTx
    }

    return await this.provider.sendTransaction(transaction)
  }

  heartbeat = async () => {
    if (this.providerId === 'maiar_app') {
      const wc = this.provider as WalletConnectProvider
      const isSafari = wc.walletConnector?.peerMeta?.description.match(/(iPad|iPhone|iPod)/g)

      if (!wc.walletConnector?.connected || isSafari) return

      try {
        await wc.sendCustomMessage({ method: 'heartbeat', params: {} })
      } catch (e) {
        console.error('wallet connect: connection lost', e)
        await this.logout()
      }
    }

    // ... space for other provider's heartbeats
  }

  getAddress = () => {
    this.ensureLoggedIn()
    return this.address as string
  }

  isMobile = () => platform.os?.family === 'iOS' || platform.os?.family === 'Android'

  getHardwareAccounts = async () => {
    if (this.providerId !== 'hardware') return []
    return await (this.provider as HWProvider).getAccounts()
  }

  private finalizeLogin = (proofableLogin: ProofableLogin, addressIndex?: number) => {
    this.persistLoginInStorage(proofableLogin.address, addressIndex)
    this.onLogin(proofableLogin)
  }

  private persistLoginInStorage = (address: string, addressIndex?: number) => {
    const serializableStorage: SerializableProviderStorage = {
      providerId: this.providerId,
      address: address,
      addressIndex: addressIndex,
    }
    window.localStorage.setItem(WalletAuthStorageKey, JSON.stringify(serializableStorage))
  }

  private loadFromStorage = () => {
    const serialized = window.localStorage.getItem(WalletAuthStorageKey)
    return !!serialized ? (JSON.parse(serialized) as SerializableProviderStorage) : null
  }

  private clearStorage = () => window.localStorage.removeItem(WalletAuthStorageKey)

  private ensureLoggedIn = () => {
    if (!this.address) {
      throw new Error('wallet: user needs to login before')
    }
  }

  private ensureConfiguredProxy = () => {
    if (!this.proxy) {
      throw new Error('wallet: proxy needs configuration')
    }
  }
}

class EmptyProvider implements IDappProvider {
  init = () => new Promise<boolean>((resolve) => resolve(true))
  login = () => new Promise<string>((resolve) => resolve(''))
  logout = () => new Promise<boolean>((resolve) => resolve(true))
  getAddress = () => new Promise<string>((resolve) => resolve(''))
  isInitialized = () => true
  isConnected = () => new Promise<boolean>((resolve) => resolve(true))
  sendTransaction = () => new Promise<Transaction>((resolve) => resolve(new Transaction({ receiver: new Address('erd1Empty') })))
  signTransaction = () => new Promise<Transaction>((resolve) => resolve(new Transaction({ receiver: new Address('erd1Empty') })))
  signTransactions = () => new Promise<Array<Transaction>>((resolve) => resolve([new Transaction({ receiver: new Address('erd1Empty') })]))
  signMessage = () => new Promise<SignableMessage>((resolve) => resolve(new SignableMessage({})))
}
