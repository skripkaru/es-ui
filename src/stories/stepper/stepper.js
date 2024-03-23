export const createStepper = () => {
  const stepper = document.createElement('ul')
  stepper.innerHTML = `
    <li class="stepper__item is-completed">Step 1</li>
    <li class="stepper__item is-active">Step 2</li>
    <li class="stepper__item">Step 3</li>
    <li class="stepper__item">Step 4</li>
  `
  stepper.className = ['stepper'].join(' ')

  return stepper
}
