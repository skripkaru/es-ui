export const Menu = (args) => {
  const menu = document.createElement('nav')
  const list = document.createElement('ul')
  list.classList.add('menu__list')

  args.list.forEach((item) => {
    list.innerHTML += `
      <li class="menu__item">
        <a class="menu__link" href="#">${item}</a>
      </li>
    `
  })
  menu.appendChild(list)
  menu.className = ['menu'].join(' ')

  return menu
}
