export default {
  title: 'UI/Stepper'
}

export const Default = () => {
  return `
    <ul class="stepper">
      <li class="stepper__item stepper__item--completed">Step 1</li>
      <li class="stepper__item stepper__item--active">Step 2</li>
      <li class="stepper__item">Step 3</li>
      <li class="stepper__item">Step 4</li>
    </ul>
  `
}
