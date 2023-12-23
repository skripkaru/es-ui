export const Input = (args) => {
  const input = document.createElement('div')
  input.innerHTML = `
    <input
      id=${args.name}
      name=${args.name}
      class="input__field"
      type=${args.type}
      ${args.disabled ? 'disabled' : ''}
      placeholder=${args.placeholder}
    >
    <label for=${args.name} class="input__label">${args.label}</label>
  `

  input.className = ['input'].join(' ')

  return input
}
