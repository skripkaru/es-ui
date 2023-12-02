export const Placeholder = () => {
  const placeholder = document.createElement('div')
  placeholder.innerHTML = `
    <span class="placeholder__error">404</span>
    <h2 class="placeholder__title">Page not found</h2>
    <div class="placeholder__body">
      <p>Go to <a class="link link--primary" href="#">home page</a></p>
    </div>
  `
  placeholder.className = ['placeholder'].join(' ')

  return placeholder
}
