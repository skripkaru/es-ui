export const initMenu = () => {
  const button = document.querySelector('.js-menu-btn')
  const content = document.querySelector('.js-menu-content')

  let isActive = false // Переменная для отслеживания состояния меню

  const toggleMenu = () => {
    isActive = !isActive // Изменяем состояние меню
    content.classList.toggle('active', isActive)
    button.classList.toggle('active', isActive)
  }

  const closeMenu = () => {
    if (isActive) {
      toggleMenu()
    }
  }

  const handleClickOutside = (event) => {
    if (!content.contains(event.target) && event.target !== button) {
      closeMenu()
    }
  }

  button.addEventListener('click', toggleMenu)

  document.addEventListener('click', handleClickOutside)
}
