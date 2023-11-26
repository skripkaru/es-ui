export const Incut = (args) => {
  const incut = document.createElement('div')
  incut.innerHTML = args.body
  incut.className = ['incut'].join(' ')

  return incut
}
