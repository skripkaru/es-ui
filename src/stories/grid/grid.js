export const createComponent = (args) => {
  const component = document.createElement('div')

  for (let i = 0; i < args.itemsCount; i++) {
    const item = document.createElement('div')
    item.style.cssText = `
      height: 2rem;
      background-color: var(--color-base-200);
    `
    component.appendChild(item)
  }

  const variant = args.variant ? `grid--${args.variant}` : ''
  component.className = ['grid', variant].join(' ')

  return component
}
