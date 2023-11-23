export default {
  title: 'Components/Button',
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
}

export const Default = {
  render: (args) => {
    const btn = document.createElement('button')
    btn.innerText = args.label
    btn.disabled = args.disabled

    const variant = args.variant ? `button--${args.variant}` : ''
    const size = args.size ? `button--${args.size}` : ''
    btn.className = ['button', variant, size].join(' ')

    return btn
  },
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false
  }
}
