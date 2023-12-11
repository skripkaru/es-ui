export const Container = () => {
  const container = document.createElement('div')
  container.style.cssText = `
    height: 32px;
    border: 1px dashed var(--default);
  `
  container.className = ['container'].join(' ')
  return container
}
