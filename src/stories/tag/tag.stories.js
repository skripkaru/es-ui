import { createComponent as Tag } from './tag'
import './tag.scss'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    type: 'checkbox',
    name: 'news',
    label: 'News'
  }
}

export const Default = {}
