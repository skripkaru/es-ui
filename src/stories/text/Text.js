export const Text = () => {
  const text = document.createElement('div')

  text.innerHTML = `
    <p class="text text--xl">Text XL</p>
    <p class="text text--l">Text L</p>
    <p class="text text--m">Text M</p>
    <p class="text text--s">Text S</p>
    <p class="text text--xs">Text XS</p>`

  return text
}
