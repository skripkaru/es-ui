export const createContainer = () => {
  const container = document.createElement('div')
  container.style.cssText = `
    height: 32px;
    border: 1px dashed var(--color-base-300);
  `
  container.className = ['container'].join(' ')
  return container
}
