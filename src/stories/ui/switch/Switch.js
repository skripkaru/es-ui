export const Switch = () => {
  const element = document.createElement('label')
  element.innerHTML = `
    <input type="checkbox">
    <span>Default</span>
  `
  element.className = ['switch'].join(' ')

  return element
}
