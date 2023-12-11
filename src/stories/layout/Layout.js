export const Layout = () => {
  const layout = document.createElement('div')

  layout.innerHTML = `
    <header class="header" style="height: 5vh;background: var(--default);"></header>
      <main class="main" style="height: 20vh;background: var(--light);"></main>
    <footer class="footer" style="height: 5vh;background: var(--default);"></footer>`

  layout.className = ['layout'].join(' ')

  return layout
}
