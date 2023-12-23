export const Textarea = (args) => {
  const textarea = document.createElement('label')
  textarea.innerHTML = `
    <textarea
      name=${args.name}
      class="textarea__field"
      ${args.disabled ? 'disabled' : ''}
      placeholder=${args.placeholder}
    ></textarea>
    <span class="textarea__label">${args.label}</span>
  `

  textarea.className = ['textarea'].join(' ')

  return textarea
}
