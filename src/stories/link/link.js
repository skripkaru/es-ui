export const createComponent = (args) => {
  const component = document.createElement('a')
  component.href = args.url
  component.innerText = args.label

  component.className = ['link'].join(' ')

  return component
}
