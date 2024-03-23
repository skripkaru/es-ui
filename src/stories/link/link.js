export const createLink = (args) => {
  const link = document.createElement('a')
  link.href = args.url
  link.innerText = args.label

  link.className = ['link'].join(' ')

  return link
}
