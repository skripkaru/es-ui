export const Header = () => {
  const header = document.createElement('header')

  header.innerHTML = `
    <a href="#">
      <h3>Logo</h3>
    </a>
    <nav class="menu">
      <button class="menu__btn js-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="menu__content js-menu-content">
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
      </div>
    </nav>
  `

  header.className = ['header', 'js-header'].join(' ')

  return header
}
