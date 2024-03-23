import { createSwitch as Switch } from './switch'
import './switch.scss'

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' }
  },
  args: {
    name: 'theme',
    label: 'Toggle mode',
    checked: false,
    disabled: false
  }
}

export const Default = {}
