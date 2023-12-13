import { Radio } from './Radio'
import './radio.scss'

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' }
  },
  args: {
    name: 'terms',
    label: 'Select variant',
    checked: false,
    disabled: false
  }
}

export const Default = {}
