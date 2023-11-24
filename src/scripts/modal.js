const getScrollWidth = () => {
  let div = document.createElement('div')
  div.style.overflowY = 'scroll'
  div.style.width = '50px'
  div.style.height = '50px'

  document.body.append(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()

  return scrollWidth
}

const openModal = (modal) => {
  modal.classList.add('active')
  document.body.classList.add('lock')
  document.body.style.marginRight = getScrollWidth() + 'px'
}

const closeModal = (modal) => {
  modal.classList.remove('active')
  document.body.classList.remove('lock')
  document.body.style.marginRight = ''
}

export const initModals = (selector = '.modal') => {
  const modals = document.querySelectorAll(selector)
  const triggers = document.querySelectorAll('[data-modal]')

  modals.forEach((modal) => {
    closeModal(modal)
    const closeBtn = modal.querySelector('.modal__close')

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        if (modal.id === trigger.dataset.modal) {
          openModal(modal)
        }
      })
    })

    closeBtn.addEventListener('click', () => {
      closeModal(modal)
    })

    document.body.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal)
      }
    })
  })
}
