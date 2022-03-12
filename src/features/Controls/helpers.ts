import { AppSystemColor } from '../../types'

export const getButtonBgColorClassName = (color?: AppSystemColor, disabled?: boolean) => {
  if (disabled) return 'bg-gray-400'
  if (color === 'blue') return 'bg-blue-500'
  if (color === 'red') return 'bg-red-500'
  if (color === 'gray') return 'bg-gray-800'
  if (color === 'black') return 'bg-black'
  if (color === 'white') return 'bg-white'
  if (color === 'indigo') return 'bg-indigo-500'
  if (color === 'yellow') return 'bg-yellow-300'
  if (color === 'green') return 'bg-green-500'
  if (color === 'purple') return 'bg-purple-500'
  // add more colors as needed ...
  return 'bg-primary-400'
}
