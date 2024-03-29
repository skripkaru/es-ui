export const createComponent = () => {
  const component = document.createElement('div')

  component.className = ['container'].join(' ')

  return component
}
