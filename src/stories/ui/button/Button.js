export const createButton = (args) => {
  const btn = document.createElement('button')
  btn.innerText = args.label

  const mode = args.primary ? 'button--primary' : 'button--secondary'
  btn.className = ['button', mode].join(' ')

  return btn
}
