export const createComponent = (args) => {
  const component = document.createElement('button')

  component.innerText = args.label

  const variant = args.variant ? `badge--${args.variant}` : ''
  const size = args.size ? `badge--${args.size}` : ''

  component.className = ['badge', variant, size].join(' ')

  return component
}
