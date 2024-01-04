export const initMenu = () => {
  const button = document.querySelector('.js-menu-btn')
  const content = document.querySelector('.js-menu-content')

  button.addEventListener('click', () => {
    content.classList.toggle('active')
    button.classList.toggle('active')
  })
}
