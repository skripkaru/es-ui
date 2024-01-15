import Accordion from 'accordion-js'

export const initAccordion = () => {
  const options = {
    elementClass: 'js-accordion-item',
    triggerClass: 'js-accordion-header',
    panelClass: 'js-accordion-body'
  }
  const accordions = Array.from(document.querySelectorAll('.js-accordion'))
  new Accordion(accordions, options)

  const nestedAccordions = Array.from(document.querySelectorAll('.js-nested-accordion'))
  new Accordion(nestedAccordions, options)
}
