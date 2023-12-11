import { Input } from './Input'
import './input.scss'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Enter name',
    disabled: false
  }
}

export const Default = {}
