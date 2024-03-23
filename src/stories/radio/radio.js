export const createRadio = (args) => {
  const radio = document.createElement('label')

  const input = document.createElement('input')
  input.classList.add('radio__field')
  input.type = 'radio'
  input.name = args.name
  input.checked = args.checked
  input.disabled = args.disabled

  const label = document.createElement('span')
  label.classList.add('radio__label')
  label.textContent = args.label

  radio.appendChild(input)
  radio.appendChild(label)

  radio.className = ['radio'].join(' ')

  return radio
}
