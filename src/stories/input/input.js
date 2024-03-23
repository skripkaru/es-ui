export const createInput = (args) => {
  const input = document.createElement('label')

  const field = document.createElement('input')
  field.classList.add('input__field')
  field.name = args.name
  field.type = args.type
  field.disabled = args.disabled
  field.placeholder = args.placeholder

  const label = document.createElement('span')
  label.classList.add('input__label')
  label.textContent = args.label

  input.appendChild(label)
  input.appendChild(field)

  const variant = args.variant ? `input--${args.variant}` : ''

  input.className = ['input', variant].join(' ')

  return input
}
