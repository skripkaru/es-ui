export const Text = () => {
  const text = document.createElement('div')

  text.innerHTML = `
    <p class="text-xl">Text XL</p>
    <p class="text-l">Text L</p>
    <p class="text-m">Text M</p>
    <p class="text-s">Text S</p>
    <p class="text-xs">Text XS</p>`

  return text
}
