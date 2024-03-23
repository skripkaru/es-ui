export const createPlaceholder = () => {
  const placeholder = document.createElement('div')
  placeholder.innerHTML = `
    <h3>Page not found</h3>
    <p>
      Go to
      <a class="link link--primary" href="#">home page</a>
    </p>
  `
  placeholder.className = ['placeholder'].join(' ')

  return placeholder
}
