import { createRadio as Radio } from './radio'
import './radio.scss'

export default {
  title: 'Radio',
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
