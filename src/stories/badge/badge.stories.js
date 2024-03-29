import { createComponent as Badge } from './badge'
import './badge.scss'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['square', 'rounded', 'circle'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
  args: {
    size: 'medium',
    label: 'new'
  }
}
export const Square = {
  args: {
    variant: 'square'
  }
}

export const Rounded = {
  args: {
    variant: 'rounded'
  }
}

export const Circle = {
  args: {
    variant: 'circle'
  }
}
