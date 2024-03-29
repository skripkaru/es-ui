export const createComponent = (args) => {
  const component = document.createElement('label')

  const field = document.createElement('input')
  field.classList.add('tag__field')
  field.type = args.type
  field.name = args.name
  field.hidden = true

  const label = document.createElement('span')
  label.classList.add('tag__label')
  label.textContent = args.label

  component.appendChild(field)
  component.appendChild(label)

  component.className = ['tag'].join(' ')

  return component
}
