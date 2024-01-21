export const initCustomSelect = () => {
  let target
  const select = document.querySelectorAll('.custom-select')
  console.log(select)

  if (!select) return

  function closeDropdown(self) {
    const top = self.querySelector('.custom-select__top')
    const bottom = self.querySelector('.custom-select__bottom')
    self.setAttribute('aria-label', 'Открыть список')
    top.setAttribute('aria-expanded', false)
    top.setAttribute('aria-label', 'Открыть список')
    bottom.setAttribute('aria-hidden', true)
    bottom.style.maxHeight = null
  }

  function openDropdown(self) {
    const top = self.querySelector('.custom-select__top')
    const bottom = self.querySelector('.custom-select__bottom')
    self.setAttribute('aria-label', 'Закрыть список')
    top.setAttribute('aria-expanded', true)
    top.setAttribute('aria-label', 'Закрыть список')
    bottom.setAttribute('aria-hidden', false)
    bottom.style.maxHeight = `${bottom.scrollHeight}px`
  }

  select?.forEach((elem) => {
    elem?.addEventListener('click', (e) => {
      console.log(e.target)
      target = e.target
      let self = e.currentTarget
      const text = self.querySelector('.custom-select__top-text')

      self.classList.toggle('custom-select--open')

      if (self.classList.contains('custom-select--open')) {
        openDropdown(self)
        outsideClick()
      } else {
        closeDropdown(self)
      }

      if (e.target.classList.contains('custom-select__bottom-item')) {
        let curText = e.target.textContent
        text.value = curText
      }
    })

    const outsideClick = () => {
      document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(target)) {
          closeDropdown(elem)
          elem.classList.remove('custom-select--open')
        }
      })
    }
  })
}
