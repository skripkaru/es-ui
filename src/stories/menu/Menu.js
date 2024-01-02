export const Menu = (args) => {
  const menu = document.createElement('nav')

  const content = document.createElement('div')
  content.classList.add('menu__content', 'js-menu-content')

  const button = document.createElement('button')
  button.classList.add('menu__btn', 'js-menu-btn')
  button.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `

  const list = document.createElement('ul')
  list.classList.add('menu__list')

  args.list.forEach((item) => {
    list.innerHTML += `
      <li class="menu__item">
        <a class="menu__link" href="#">${item}</a>
      </li>
    `
  })

  content.appendChild(list)
  menu.appendChild(button)
  menu.appendChild(content)

  menu.className = ['menu'].join(' ')

  return menu
}
