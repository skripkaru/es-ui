export const createComponent = (args) => {
  const component = document.createElement('button')

  component.innerHTML = args.content
  component.disabled = args.disabled

  const variant = args.variant ? `button--${args.variant}` : ''
  const size = args.size ? `button--${args.size}` : ''
  component.className = ['button', variant, size].join(' ')

  return component
}
