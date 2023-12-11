export const Checkbox = (args) => {
  const checkbox = document.createElement('label')

  const input = document.createElement('input')
  input.classList.add('checkbox__field')
  input.type = 'checkbox'
  input.name = args.name
  input.checked = args.checked
  input.disabled = args.disabled

  const label = document.createElement('span')
  label.classList.add('checkbox__label')
  label.textContent = args.label

  checkbox.appendChild(input)
  checkbox.appendChild(label)

  checkbox.className = ['checkbox'].join(' ')

  return checkbox
}
