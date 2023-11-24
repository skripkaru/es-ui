export default {
  title: 'Title'
}

export const Title = {
  render: () => {
    const title = document.createElement('div')
    title.innerHTML = `
    <h1>Title H1</h1>
    <h2>Title H2</h2>
    <h3>Title H3</h3>
    <h4>Title H4</h4>
  `

    return title
  }
}
