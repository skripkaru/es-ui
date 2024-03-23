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

export const createSelect = () => {
  const select = document.createElement('div')
  select.classList.add('select')

  const field = document.createElement('select')
  field.classList.add('js-select')
  field.placeholder = 'Select'
  field.autocomplete = 'off'
  field.innerHTML = `
    <option value="">Select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  `

  select.appendChild(field)

  return select
}
