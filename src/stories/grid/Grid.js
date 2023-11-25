export const Grid = (args) => {
  const grid = document.createElement('div')

  for (let i = 0; i < args.itemsCount; i++) {
    const item = document.createElement('div')
    item.style.cssText = `
      height: 2rem;
      background-color: var(--default);
    `
    grid.appendChild(item)
  }

  const variant = args.variant ? `grid--${args.variant}` : ''
  grid.className = ['grid', variant].join(' ')

  return grid
}
