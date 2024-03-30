import { createComponent as inputTel } from '../input/input'
import '../input/input.scss'

export default {
  title: 'inputTel',
  component: inputTel,
  args: {
    type: 'tel',
    name: 'phone',
    placeholder: 'Phone',
    disabled: false
  }
}

export const Default = {}
