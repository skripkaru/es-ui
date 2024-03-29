export const createComponent = (args) => {
  const component = document.createElement('figure')

  component.innerHTML = `
    <img src=${args.image} alt="">
    <figcaption>${args.description}</figcaption>
  `

  component.className = ['image'].join(' ')

  return component
}
