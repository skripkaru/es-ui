import { Button } from './Button'
import './button.scss'

export default {
  title: 'Basic/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    disabled: { control: 'boolean' }
  },
  args: {
    size: 'medium',
    label: 'Button',
    disabled: false
  }
}

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