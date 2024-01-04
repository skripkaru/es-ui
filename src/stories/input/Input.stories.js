import { Input } from './Input'
import './input.scss'

export default {
  title: 'Form/Input',
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

export const WithButton = {
  args: {
    variant: 'with-button',
    label: 'Copy',
    placeholder: 'Copy'
  }
}
