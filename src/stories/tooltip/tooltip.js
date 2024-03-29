import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export const initTooltip = () => {
  const triggers = document.querySelectorAll('.js-tooltip-trigger')

  if (!triggers.length) return

  const options = {
    allowHTML: true
  }

  triggers.forEach((trigger) => {
    const tooltip = trigger.nextElementSibling

    tippy(trigger, {
      content: tooltip,
      ...options
    })
  })
}

export const createComponent = () => {
  const component = document.createElement('div')

  const button = document.createElement('button')
  button.classList.add('button', 'button--text', 'js-tooltip-trigger')
  button.innerHTML = `
    Show tooltip
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
    </button>
  `

  const tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  tooltip.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, est?'

  component.appendChild(button)
  component.appendChild(tooltip)

  return component
}
