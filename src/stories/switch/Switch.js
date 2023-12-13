export const Switch = (args) => {
  const toggle = document.createElement('label')

  const input = document.createElement('input')
  input.classList.add('switch__field')
  input.type = 'checkbox'
  input.name = args.name
  input.checked = args.checked
  input.disabled = args.disabled

  const label = document.createElement('span')
  label.classList.add('switch__label')
  label.textContent = args.label

  toggle.appendChild(input)
  toggle.appendChild(label)

  toggle.className = ['switch'].join(' ')

  return toggle
}
