export const createComponent = () => {
  const component = document.createElement('ul')
  component.innerHTML = `
    <li class="stepper__item is-completed">Step 1</li>
    <li class="stepper__item is-active">Step 2</li>
    <li class="stepper__item">Step 3</li>
    <li class="stepper__item">Step 4</li>
  `
  component.className = ['stepper'].join(' ')

  return component
}
