export const createImage = (args) => {
  const image = document.createElement('figure')
  image.innerHTML = `
    <img src=${args.image} alt="">
    <figcaption>${args.description}</figcaption>
  `
  image.className = ['image'].join(' ')

  return image
}
