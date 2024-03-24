import { createSwitcher as Switcher } from './switcher'
import './switcher.scss'

export default {
  title: 'Switcher',
  component: Switcher,
  args: {
    name: 'answer',
    firstLabel: 'Yes',
    secondLabel: 'No'
  }
}

export const Default = {}
