import { createComponent as Dropdown } from './dropdown'
import './dropdown.scss'
import '../button/button.scss'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    items: ['About', 'News', 'Settings']
  }
}

export const Default = {}
