export const createBadge = (args) => {
  const badge = document.createElement('button')
  badge.innerText = args.label
  const variant = args.variant ? `badge--${args.variant}` : ''
  const size = args.size ? `badge--${args.size}` : ''
  badge.className = ['badge', variant, size].join(' ')

  return badge
}
