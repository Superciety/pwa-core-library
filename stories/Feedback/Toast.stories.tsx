import { ComponentStory, ComponentMeta } from '@storybook/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { showToast, ScyRoot } from '../../src/index'

const ButtonClassNames = 'bg-gray-100 rounded-lg m-2 px-2 py-1'

const MockComponent = () => (
  <div className="block w-full h-screen">
    <ScyRoot />
    <button className={ButtonClassNames} onClick={() => showToast('this is a success - like you!', 'success')}>
      Success
    </button>
    <button className={ButtonClassNames} onClick={() => showToast('this is an info - like you!', 'info')}>
      Info
    </button>
    <button className={ButtonClassNames} onClick={() => showToast('this is a warning - like you!', 'warning')}>
      Warning
    </button>
    <button className={ButtonClassNames} onClick={() => showToast('this is an error - like you!', 'error')}>
      Error
    </button>
    <button className={ButtonClassNames} onClick={() => showToast("here we're vibin - like you!", 'vibe')}>
      Lets vibe 🙌
    </button>
    <button className={ButtonClassNames} onClick={() => showToast('this is a success - like you!', 'success', { icon: faCheck })}>
      Success with Icon
    </button>
    <button className={ButtonClassNames} onClick={() => showToast('this is a success - like you!', 'success', { href: 'https://superciety.com' })}>
      Success with Link
    </button>
    <button
      className={ButtonClassNames}
      onClick={() => showToast('this is a success - like you!', 'success', { icon: faCheck, href: 'https://superciety.com' })}
    >
      Success with Link & Icon
    </button>
  </div>
)

export default {
  title: 'Feedback/Toast',
  component: MockComponent,
} as ComponentMeta<typeof MockComponent>

const Template: ComponentStory<typeof MockComponent> = (args) => <MockComponent />

export const Default = Template.bind({})
Default.args = {}
