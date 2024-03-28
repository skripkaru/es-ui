export const initInputNumber = () => {
  const inputs = document.querySelectorAll('.js-input-number')

  if (!inputs.length) return

  const incrementValue = (field) => {
    field.value = Number(field.value) + 1
  }

  const decrementValue = (field) => {
    const numericValue = Number(field.value)
    field.value = numericValue > 0 ? numericValue - 1 : 0
  }

  const handleInput = (field) => {
    // Предотвращаем ввод нечисловых значений
    field.value = field.value.replace(/\D/, '')
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
    <div class="input-number__inner">
      <button class="input-number__btn js-input-decrement">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
        </svg>
      </button>
      <input class="input-number__field js-input-field" name="count" type="number" value="1" />
      <button class="input-number__btn js-input-increment">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
      </button>
    </div>
  </label>
  `
}
