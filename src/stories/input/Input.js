export const Input = (args) => {
  const input = document.createElement('label')
  input.innerHTML = `
    <input
      name=${args.name}
      class="input__field"
      type=${args.type}
      ${args.disabled ? 'disabled' : ''}
      placeholder=${args.placeholder}
    >
    <span class="input__label">${args.label}</span>
  `

  input.className = ['input'].join(' ')

  return input
}
