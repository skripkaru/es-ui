import { Checkbox } from './Checkbox'
import './checkbox.scss'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' }
  },
  args: {
    name: 'terms',
    label: 'Accept the terms',
    checked: false,
    disabled: false
  }
}

export const Default = {}
