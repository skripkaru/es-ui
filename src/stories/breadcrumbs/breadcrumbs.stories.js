import { createComponent as Breadcrumbs } from './breadcrumbs'
import './breadcrumbs.scss'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      { link: '#', label: 'Main' },
      { link: '#', label: 'Catalog' },
      { link: '#', label: 'Product' }
    ]
  }
}

export const Default = {}
