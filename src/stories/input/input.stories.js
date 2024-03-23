import { createInput as Input } from './input'
import './input.scss'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    variant: {
      options: ['with-button'],
      control: { type: 'radio' }
    }
  },
  args: {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Name',
    disabled: false
  }
}

export const Default = {}
