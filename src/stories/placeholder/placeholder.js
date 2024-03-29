export const createComponent = () => {
  const component = document.createElement('div')
  component.innerHTML = `
    <h3>Page not found</h3>
    <p>
      Go to
      <a class="link link--primary" href="#">home page</a>
    </p>
  `
  component.className = ['placeholder'].join(' ')

  return component
}
