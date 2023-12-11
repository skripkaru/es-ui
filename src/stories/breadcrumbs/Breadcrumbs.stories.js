import { Breadcrumbs } from './Breadcrumbs'
import './breadcrumbs.scss'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    list: [
      { link: '#', label: 'Main' },
      { link: '#', label: 'Catalog' },
      { link: '#', label: 'Product' }
    ]
  }
}

export const Default = {}
