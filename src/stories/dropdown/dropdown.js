import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export const initDropdown = () => {
  const triggers = document.querySelectorAll('.js-dropdown-trigger')

  if (!triggers.length) return

  const options = {
    arrow: false,
    placement: 'bottom',
    trigger: 'click',
    allowHTML: true
  }

  triggers.forEach((trigger) => {
    const dropdown = trigger.nextElementSibling

    tippy(trigger, {
      content: dropdown,
      ...options
    })
  })
}

export const createDropdown = () => {
  return `
  <button class="button button--text js-dropdown-trigger">
    Open menu
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  </button>
  <div class="dropdown">
    <a class="dropdown__item" href="#">About</a>
    <a class="dropdown__item" href="#">News</a>
    <a class="dropdown__item" href="#">Settings</a>
  </div>
  `
}
