export const Textarea = () => {
  const textarea = document.createElement('div')
  textarea.innerHTML = `
    <label for="name">Message <span>*</span></label>
    <textarea id="name"></textarea>
  `
  textarea.className = ['textarea'].join(' ')

  return textarea
}
