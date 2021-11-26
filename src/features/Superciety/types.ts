import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type Identity = {
  known: boolean
  url: string
  address: string | null
  username: string | null
  name: string | null
  bio: string | null
  profileImageUrl: string | null
  timezone: string | null
  rank: string
  connections: Record<SocialAccountPlatform, SocialAccount>
}

export type SocialAccount = {
  platform: string
  username: string
  link: string
}

export type SocialAccountPlatform = 'freeiam' | 'twitter' | 'github'

export type SocialAccountProvider = {
  id: SocialAccountPlatform
  label: string
  icon: IconProp
  colorCode: string
  connectUrl: string
}
