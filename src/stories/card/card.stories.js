import { createComponent as Card } from './card'
import './card.scss'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      options: ['reverse'],
      control: { type: 'radio' }
    }
  },
  args: {
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Default = {}
