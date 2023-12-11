import { List } from './List'
import './list.scss'

export default {
  title: 'Basic/List',
  component: List,
  argTypes: {
    variant: {
      options: ['marked', 'numbered'],
      control: { type: 'radio' }
    }
  },
  args: {
    list: ['First', 'Second', 'Third']
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
