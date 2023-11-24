export default {
  title: 'UI/Avatar',
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
  }
}

export const Default = {
  render: (args) => {
    const avatar = document.createElement('div')
    const initials = args.label
      ?.split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
    avatar.innerHTML = args.image ? `<img src=${args.image} alt=${args.label}/>` : initials

    const variant = args.variant ? `avatar--${args.variant}` : ''
    const size = args.size ? `avatar--${args.size}` : ''
    avatar.className = ['avatar', variant, size].join(' ')

    return avatar
  },
  args: {
    variant: 'rounded',
    size: 'medium',
    label: 'John Doe'
  }
}
