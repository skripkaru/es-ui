export const Button = (args) => {
  const btn = document.createElement('button')
  btn.innerText = args.label
  btn.disabled = args.disabled

  const variant = args.variant ? `button--${args.variant}` : ''
  const size = args.size ? `button--${args.size}` : ''
  btn.className = ['button', variant, size].join(' ')

  return btn
}
