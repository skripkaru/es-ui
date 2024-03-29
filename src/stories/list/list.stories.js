import { createComponent as List } from './list'
import './list.scss'

export default {
  title: 'List',
  component: List,
  argTypes: {
    variant: {
      options: ['marked', 'numbered'],
      control: { type: 'radio' }
    }
  },
  args: {
    items: ['First', 'Second', 'Third']
  }
}

export const Marked = {
  args: {
    variant: 'marked'
  }
}

export const Numbered = {
  args: {
    variant: 'numbered'
  }
}
