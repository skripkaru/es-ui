export const Link = (args) => {
  const link = document.createElement('a')
  link.href = args.url
  link.innerText = args.label

  const variant = args.variant ? `link--${args.variant}` : ''
  const size = args.size ? `link--${args.size}` : ''
  link.className = ['link', variant, size].join(' ')

  return link
}
