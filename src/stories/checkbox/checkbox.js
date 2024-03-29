export const createComponent = (args) => {
  const component = document.createElement('label')

  const input = document.createElement('input')
  input.classList.add('checkbox__field')
  input.type = 'checkbox'
  input.name = args.name
  input.checked = args.checked
  input.disabled = args.disabled

  const label = document.createElement('span')
  label.classList.add('checkbox__label')
  label.textContent = args.label

  component.appendChild(input)
  component.appendChild(label)

  component.className = ['checkbox'].join(' ')

  return component
}
