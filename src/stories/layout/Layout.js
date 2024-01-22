export const Layout = () => {
  const layout = document.createElement('div')

  layout.innerHTML = `
    <header class="header" style="height: 5vh;background: var(--color-base-300);"></header>
      <main class="main" style="height: 20vh;background: var(--color-base-200);"></main>
    <footer class="footer" style="height: 5vh;background: var(--color-base-300);"></footer>`

  layout.className = ['layout'].join(' ')

  return layout
}
