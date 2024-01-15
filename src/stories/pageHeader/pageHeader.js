export const PageHeader = () => {
  const element = document.createElement('div')

  element.innerHTML = `
    <button class="link">Back</button>
    <h1 class="page-header__title">News</h1>
    <a href="#" class="page-header__link link link--primary">All news</a>
  `

  element.className = ['page-header'].join(' ')

  return element
}
