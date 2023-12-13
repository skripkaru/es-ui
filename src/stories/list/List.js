export const List = (args) => {
  const list = document.createElement('ul')

  args.list.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`
  })

  const variant = args.variant ? `list--${args.variant}` : ''
  list.className = ['list', variant].join(' ')

  return list
}
