export const initCollapses = (parentSelector = '.collapse') => {
  const collapses = document.querySelectorAll(parentSelector)

  const openCollapse = (collapse) => {
    const body = collapse.querySelector('.collapse__body')
    collapse.classList.add('collapse--active')
    body.style.maxHeight = body.scrollHeight + 'px'
  }

  const closeCollapse = (collapse) => {
    const body = collapse.querySelector('.collapse__body')
    collapse.classList.remove('collapse--active')
    body.style.maxHeight = null
  }

  collapses.forEach((collapse) => {
    const header = collapse.querySelector('.collapse__header')
    const body = collapse.querySelector('.collapse__body')

    header.addEventListener('click', () => {
      if (body.style.maxHeight) {
        closeCollapse(collapse)
      } else {
        collapses.forEach((collapse) => closeCollapse(collapse))
        openCollapse(collapse)
      }
    })
  })
}
