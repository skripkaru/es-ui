export const Title = () => {
  const title = document.createElement('div')

  title.innerHTML = `
    <h1 class="title title--xl">Title XL</h1>
    <h2 class="title title--l">Title L</h2>
    <h3 class="title title--m">Title M</h3>
    <h4 class="title title--s">Title S</h4>`

  return title
}
