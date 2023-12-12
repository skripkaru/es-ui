export const Select = () => {
  const select = document.createElement('select')
  select.placeholder = 'Select'
  select.autocomplete = 'off'
  select.innerHTML = `
    <option value="">Select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  `
  select.className = ['select', 'js-select'].join(' ')

  return select
}
