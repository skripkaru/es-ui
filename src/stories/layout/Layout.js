export const Layout = () => {
  const layout = document.createElement('div')
  layout.classList.add('layout')

  const header = document.createElement('header')
  header.classList.add('header')
  header.style.cssText = `
    min-height: 5vh;
    background-color: var(--default);
  `

  const main = document.createElement('main')
  main.classList.add('main')
  main.style.cssText = `
    min-height: 20vh;
    background-color: var(--light);
  `

  const footer = document.createElement('footer')
  footer.classList.add('footer')
  footer.style.cssText = `
    min-height: 5vh;
    background-color: var(--default);
  `

  layout.appendChild(header)
  layout.appendChild(main)
  layout.appendChild(footer)

  // layout.innerHTML = `
  //   <header class="header"></header>
  //     <main class="main"></main>
  //   <footer class="footer"></footer>`

  return layout
}
