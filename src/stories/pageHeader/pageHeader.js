export const createComponent = () => {
  const component = document.createElement('div')

  component.innerHTML = `
    <button class="link">Back</button>
    <h1 class="page-header__title">News</h1>
    <a href="#" class="page-header__link link link--primary">All news</a>
  `

  component.className = ['page-header'].join(' ')

  return component
}
