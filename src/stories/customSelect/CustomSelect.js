export const CustomSelect = () => {
  const createEl = document.createElement('div')
  createEl.innerHTML = `
  <div class="custom-select__top">
    <input class="custom-select__top-text" type="text" placeholder="Выберите из списка">
    <span class="custom-select__top-icon">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7.66748L10 12.6675L15 7.66748" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </span>
  </div>
  <div class="custom-select__bottom" role="alert" aria-hidden="true">
    <span class="custom-select__bottom-item">Выставка</span>
    <span class="custom-select__bottom-item">Фестиваль</span>
    <span class="custom-select__bottom-item">Концерт</span>
    <span class="custom-select__bottom-item">Лекция</span>
    <span class="custom-select__bottom-item">Мастер-класс</span>
  </div>
  `
  createEl.className = ['custom-select'].join(' ')
  createEl.setAttribute('aria-label', 'Открыть список')
  createEl.setAttribute('aria-expanded', 'false')

  return createEl
}
