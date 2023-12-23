import { Textarea } from './Textarea'
import './textarea.scss'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  args: {
    name: 'name',
    label: 'Enter message',
    placeholder: 'Enter message',
    disabled: false
  }
}

export const Default = {}
