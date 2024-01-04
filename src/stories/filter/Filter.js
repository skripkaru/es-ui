export const Filter = () => {
  const filter = document.createElement('form')
  filter.classList.add('filter')
  filter.innerHTML = `
    <h3 style="margin: 0">Filter</h3>
    <div class="grid accordion js-accordion">
      <div class="accordion__item js-accordion-item">
        <div class="accordion__header js-accordion-header">
           Brand
          <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <div class="accordion__body js-accordion-body">
          <div class="accordion__body-inner">
            <div class="grid">
              <label class="checkbox">
                <input class="checkbox__field" type="checkbox" name="nike" />
                <span class="checkbox__label">Nike</span>
              </label>
              <label class="checkbox">
                <input class="checkbox__field" type="checkbox" name="adidas" />
                <span class="checkbox__label">Adidas</span>
              </label>
              <label class="checkbox">
                <input class="checkbox__field" type="checkbox" name="puma" />
                <span class="checkbox__label">Puma</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion__item js-accordion-item">
        <div class="accordion__header js-accordion-header">
           Size
          <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <div class="accordion__body js-accordion-body">
          <div class="accordion__body-inner">
            <div class="grid">
              <label class="radio">
                <input class="radio__field" type="radio" name="size" value="s" />
                <span class="radio__label">S</span>
              </label>
              <label class="radio">
                <input class="radio__field" type="radio" name="size" value="m" />
                <span class="radio__label">M</span>
              </label>
              <label class="radio">
                <input class="radio__field" type="radio" name="size" value="l"/>
                <span class="radio__label">L</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button button--primary" style="margin-top: auto">Apply</button>
  `

  return filter
}
