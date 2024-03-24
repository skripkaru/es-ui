import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import 'nouislider/dist/nouislider.css'

export const initInputRange = () => {
  const inputs = document.querySelectorAll('.js-input-range')

  if (!inputs.length) return

  inputs.forEach((input) => {
    const fields = input.querySelectorAll('.js-input-range-field')
    const slider = input.querySelector('.js-input-range-slider')
    const inputMin = input.querySelector('[data-min]')
    const inputMax = input.querySelector('[data-max]')
    const min = Number(inputMin.dataset.min)
    const max = Number(inputMax.dataset.max)

    noUiSlider.create(slider, {
      start: [min, max],
      step: 500,
      connect: true,
      range: {
        min,
        max
      },
      format: wNumb({
        decimals: 0
      })
    })

    slider.noUiSlider.on('update', (values, handle) => {
      fields[handle].value = values[handle]
    })

    fields.forEach((field) => {
      field.addEventListener('change', () => {
        slider.noUiSlider.set([field.value, null])
      })
    })
  })
}

export const createInputRange = (args) => {
  return `
  <div class="input-range js-input-range">
    <div class="input-range__fields">
      <label class="input js-input">
        <div class="input__inner">
          <input class="input__field js-input-range-field" name=${args.name} type="number" data-min="0" />
        </div>
      </label>
      <label class="input js-input">
        <div class="input__inner">
          <input class="input__field js-input-range-field" name=${args.name} type="number" data-max="100000" />
        </div>
      </label>
    </div>
    <div class="js-input-range-slider"></div>
  </div>
  `
}
