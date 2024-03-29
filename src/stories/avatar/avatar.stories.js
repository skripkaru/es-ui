import { createComponent as Avatar } from './avatar'
import image from '../../assets/images/avatar.jpg'
import './avatar.scss'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    image: { control: 'text' },
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
    label: 'John Doe',
    image: image
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

export const WithText = {
  args: {
    image: null,
    label: 'J'
  }
}
