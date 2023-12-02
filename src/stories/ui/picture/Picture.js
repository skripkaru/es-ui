export const Picture = () => {
  const picture = document.createElement('figure')
  picture.innerHTML = `
    <img src="https://images.unsplash.com/photo-1700159915592-004562ddcf6f" alt="">
    <figcaption>Description</figcaption>
  `
  picture.className = ['picture'].join(' ')

  return picture
}
