import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.default.css'

export const initSelect = () => {
  const selects = Array.from(document.querySelectorAll('.js-select'))

  selects.forEach((select) => {
    const options = {
      searchField: null
    }

    new TomSelect(select, options)
  })
}

export const createComponent = (args) => {
  const component = document.createElement('div')

  const field = document.createElement('select')
  field.classList.add('js-select')
  field.placeholder = 'Select'
  field.autocomplete = 'off'

  args.options.forEach((option) => {
    field.innerHTML += `<option value="${option.value}">${option.label}</option>`
  })

  component.appendChild(field)

  component.className = ['select'].join(' ')

  return component
}
