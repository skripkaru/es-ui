export default {
  title: 'Text'
}

export const Text = {
  render: () => {
    const text = document.createElement('div')
    text.innerHTML = `
    <p class="text text--l">Text L</p>
    <p class="text text--m">Text M</p>
    <p class="text text--s">Text S</p>
  `

    return text
  }
}
