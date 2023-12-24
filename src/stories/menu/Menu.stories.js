import { Menu } from './Menu'
import './menu.scss'

export default {
  title: 'Navigation/Menu',
  component: Menu,
  args: {
    list: ['Home', 'About', 'Contacts']
  }
}

export const Default = {}
