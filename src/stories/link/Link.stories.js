import { Link } from './Link'
import './link.scss'

export default {
  title: 'Basic/Link',
  component: Link,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
  args: {
    size: 'medium',
    label: 'Link'
  }
}

export const Default = {}

export const Primary = {
  args: {
    variant: 'primary'
  }
}

export const Secondary = {
  args: {
    variant: 'secondary'
  }
}
