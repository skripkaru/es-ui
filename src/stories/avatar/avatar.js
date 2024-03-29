export const createComponent = (args) => {
  const component = document.createElement('div')

  component.innerHTML = args.image ? `<img src="${args.image}" alt="${args.label}"/>` : args.label

  const variant = args.variant ? `avatar--${args.variant}` : ''
  const size = args.size ? `avatar--${args.size}` : ''

  component.className = ['avatar', variant, size].join(' ')

  return component
}
