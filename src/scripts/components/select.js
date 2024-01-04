import TomSelect from 'tom-select'

export const initSelect = () => {
  const selects = Array.from(document.querySelectorAll('.js-select'))

  selects.forEach((select) => {
    const options = {
      plugins: ['dropdown_header']['clear_button'],
      create: false,
      persist: false,
      searchField: null
      // controlInput: null
    }

    new TomSelect(select, options)
  })
}
