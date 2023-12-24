export const Header = () => {
  const header = document.createElement('header')

  header.innerHTML = `
    <a href="#">
      <h3>Logo</h3>
    </a>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link" href="#">Home</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">About</a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  `

  header.className = ['header', 'js-header'].join(' ')

  return header
}
