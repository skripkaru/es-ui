export const Input = (args) => {
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

  input.appendChild(field)
  input.appendChild(label)

  if (args.variant === 'with-button') {
    const button = document.createElement('button')
    button.classList.add('input__button')
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
      </svg>
    `

    input.appendChild(button)
  }

  const variant = args.variant ? `input--${args.variant}` : ''

  input.className = ['input', variant].join(' ')

  return input
}
