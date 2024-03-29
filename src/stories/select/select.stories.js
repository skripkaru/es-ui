import { createComponent as Select } from './select'
import './select.scss'

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      {
        value: 'russian',
        label: 'Russian'
      },
      {
        value: 'english',
        label: 'English'
      },
      {
        value: 'french',
        label: 'French'
      }
    ]
  }
}

export const Default = {}
