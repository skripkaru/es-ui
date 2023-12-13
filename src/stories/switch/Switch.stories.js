import { Switch } from './Switch'
import './switch.scss'

export default {
  title: 'Form/Switch',
  component: Switch,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' }
  },
  args: {
    name: 'theme',
    label: 'Switch theme',
    checked: false,
    disabled: false
  }
}

export const Default = {}
