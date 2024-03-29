export const createComponent = (args) => {
  const component = document.createElement('ul')

  args.items.forEach((item) => {
    component.innerHTML += `<li>${item}</li>`
  })

  const variant = args.variant ? `list--${args.variant}` : ''
  component.className = ['list', variant].join(' ')

  return component
}
