import { Avatar } from './Avatar'
import image from '../../../assets/images/avatar.jpg'

export default {
  title: 'Data/Avatar',
  component: Avatar,
  argTypes: {
    image: { control: 'text' },
    variant: {
      options: ['circle', 'square', 'rounded'],
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

export const Circle = {
  args: {
    variant: 'circle'
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

export const WithText = {
  args: {
    image: ''
  }
}
