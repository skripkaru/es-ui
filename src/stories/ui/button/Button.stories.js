import { Button } from './Button'

export default {
  title: 'UI/Button',
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
  }
}

const Template = (args) => {
  return Button(args)
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary'
}
