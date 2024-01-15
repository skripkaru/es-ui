export const Title = () => {
  const title = document.createElement('div')

  title.innerHTML = `
    <h1 class="h1">Title XL</h1>
    <h2 class="h2">Title L</h2>
    <h3 class="h3">Title M</h3>
    <h4 class="h4">Title S</h4>`

  return title
}
