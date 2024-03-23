export const initInputNumber = () => {
  const inputs = document.querySelectorAll('.js-input-number')

  if (!inputs.length) return

  const incrementValue = (field) => {
    field.value = Number(field.value) + 1
  }

  const decrementValue = (field) => {
    const numericValue = Number(field.value)
    field.value = numericValue > 1 ? numericValue - 1 : 1
  }

  const handleInput = (field) => {
    // Предотвращаем ввод нечисловых значений
    field.value = field.value.replace(/\D/, '')

    // Устанавливаем минимальное значение 1
    if (Number(field.value) < 1) {
      field.value = 1
    }
  }

  inputs.forEach((input) => {
    const field = input.querySelector('.js-input-field')
    const incrementBtn = input.querySelector('.js-input-increment')
    const decrementBtn = input.querySelector('.js-input-decrement')

    incrementBtn.addEventListener('click', () => incrementValue(field))
    decrementBtn.addEventListener('click', () => decrementValue(field))

    field.addEventListener('input', () => handleInput(field))
  })
}

export const createInputNumber = () => {
  return `
  <label class="input-number js-input-number">
    <button class="input-number__btn js-input-decrement">-</button>
    <input class="input-number__field js-input-field" name="count" type="number" value="1" />
    <button class="input-number__btn js-input-increment">+</button>
  </label>
  `
}
