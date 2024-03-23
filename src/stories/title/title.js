export const createTitle = () => {
  const title = document.createElement('div')

  title.innerHTML = `
    <h1 class="title-h1">Heading 1</h1>
    <h2 class="title-h2">Heading 2</h2>
    <h3 class="title-h3">Heading 3</h3>
    <h4 class="title-h4">Heading 4</h4>`

  return title
}
