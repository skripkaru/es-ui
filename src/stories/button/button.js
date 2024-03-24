export const createButton = (args) => {
  const button = document.createElement('button')
  button.innerHTML = args.content
  button.disabled = args.disabled

  const variant = args.variant ? `button--${args.variant}` : ''
  const size = args.size ? `button--${args.size}` : ''
  button.className = ['button', variant, size].join(' ')

  return button
}
