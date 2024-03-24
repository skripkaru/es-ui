export const initInput = () => {
  const inputs = document.querySelectorAll('.js-input')

  if (!inputs.length) return

  inputs.forEach((input) => {
    const field = input.querySelector('input')
    const clearBtn = input.querySelector('.js-input-clear')
    const copyBtn = input.querySelector('.js-input-copy')

    const toggleClass = (className) => {
      input.classList.toggle(className)
    }

    const clearInputValue = () => {
      field.value = ''
    }

    const copyInputValue = async () => {
      try {
        await navigator.clipboard.writeText(field.value)
      } catch (err) {
        throw new Error(`Failed to copy: ${err.message}`)
      }
    }

    field.addEventListener('mouseenter', () => toggleClass('is-hover'))
    field.addEventListener('mouseleave', () => toggleClass('is-hover'))

    field.addEventListener('focus', () => toggleClass('is-focus'))
    field.addEventListener('blur', () => toggleClass('is-focus'))

    clearBtn?.addEventListener('click', clearInputValue)
    copyBtn?.addEventListener('click', copyInputValue)
  })
}

export const createInput = (args) => {
  const input = document.createElement('label')

  const label = document.createElement('span')
  label.classList.add('input__label')
  label.textContent = args.label

  const inner = document.createElement('div')
  inner.classList.add('input__inner')
  inner.tabIndex = -1

  const icon = document.createElement('span')
  icon.classList.add('input__icon')
  icon.innerHTML = args.icon

  const button = document.createElement('button')
  button.classList.add('input__button')
  button.innerHTML = args.buttonIcon
  button.tabIndex = -1

  const field = document.createElement('input')
  field.classList.add('input__field')
  field.type = args.type
  field.name = args.name
  field.placeholder = args.placeholder
  field.disabled = args.disabled
  field.tabIndex = 0

  inner.appendChild(field)

  if (args.label) {
    input.appendChild(label)
  }

  if (args.icon) {
    inner.appendChild(icon)
    inner.appendChild(field)
  }

  if (args.buttonIcon) {
    inner.appendChild(field)
    inner.appendChild(button)
  }

  input.appendChild(inner)

  input.className = ['input', 'js-input'].join(' ')

  return input
}
