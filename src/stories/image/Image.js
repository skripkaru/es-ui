export const Image = (args) => {
  const picture = document.createElement('figure')
  picture.innerHTML = `
    <img src=${args.image} alt="">
    <figcaption>${args.description}</figcaption>
  `
  picture.className = ['image'].join(' ')

  return picture
}
