export const initHeader = () => {
  const header = document.querySelector('.js-header')
  const toggleClass = 'hide'

  let prevScrollPos = window.scrollY

  window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY
    header.classList[prevScrollPos < currentScrollPos ? 'add' : 'remove'](toggleClass)
    prevScrollPos = currentScrollPos
  })
}
