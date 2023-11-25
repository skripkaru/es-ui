export const Color = () => {
  const colors = [
    '--base-dark',
    '--base-light',
    '--dark',
    '--light',
    '--default',
    '--info',
    '--neutral',
    '--line',
    '--accent',
    '--accent-dark',
    '--success',
    '--success-light',
    '--warning',
    '--warning-light',
    '--error',
    '--error-light'
  ]

  const color = document.createElement('div')
  color.classList.add('grid')

  colors.forEach((el) => {
    const item = document.createElement('div')
    item.style.cssText = `
    padding: .5rem 1rem;
    font-size: 0.875rem;
    color: ${!el.includes('light') ? 'var(--light)' : 'var(--dark)'};
    background-color: var(${el});`
    item.textContent = el
    color.appendChild(item)
  })

  return color
}
