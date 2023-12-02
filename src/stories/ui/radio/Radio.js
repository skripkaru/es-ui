export const Radio = () => {
  const radio = document.createElement('label')
  radio.innerHTML = `
    <input type="radio">
    <span>Default</span>
  `
  radio.className = ['radio'].join(' ')

  return radio
}
