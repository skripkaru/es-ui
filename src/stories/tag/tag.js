export const createTag = (args) => {
  const tag = document.createElement('label')

  const field = document.createElement('input')
  field.classList.add('tag__field')
  field.type = args.type
  field.name = args.name
  field.hidden = true

  const label = document.createElement('span')
  label.classList.add('tag__label')
  label.textContent = args.label

  tag.appendChild(field)
  tag.appendChild(label)

  tag.className = ['tag'].join(' ')

  return tag
}
