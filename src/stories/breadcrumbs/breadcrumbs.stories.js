import { createBreadcrumbs as Breadcrumbs } from './breadcrumbs'
import './breadcrumbs.scss'

export default {
  title: 'Breadcrumbs',
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
