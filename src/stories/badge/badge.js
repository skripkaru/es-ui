export const createBadge = (args) => {
  const badge = document.createElement('button')
  badge.innerText = args.label
  const variant = args.variant ? `badge--${args.variant}` : ''
  const size = args.size ? `badge--${args.size}` : ''
  const status = args.status ? `badge--${args.status}` : ''
  badge.className = ['badge', variant, size, status].join(' ')

  return badge
}
