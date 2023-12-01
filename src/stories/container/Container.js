export const Container = () => {
  const container = document.createElement('div')
  container.classList.add('container')
  container.style.cssText = `
    min-height: 10vh;
    background-color: var(--default);`

  return container
}
