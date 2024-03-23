import Accordion from 'accordion-js'

export const initAccordion = () => {
  const accordions = document.querySelectorAll('.js-accordion')

  if (!accordions.length) return

  const options = {
    elementClass: 'js-accordion-item',
    triggerClass: 'js-accordion-header',
    panelClass: 'js-accordion-body'
  }

  accordions.forEach((accordion) => {
    new Accordion(accordion, options)
  })
}

export const createAccordion = () => {
  return `
  <div class="accordion js-accordion">
    <div class="accordion__item js-accordion-item">
      <div class="accordion__header js-accordion-header">
        Lorem ipsum dolor sit amet.
        <span class="accordion__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </div>
      <div class="accordion__body js-accordion-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae. Non, reprehenderit!
        </p>
      </div>
    </div>
    <div class="accordion__item js-accordion-item">
      <div class="accordion__header js-accordion-header">
        Lorem ipsum dolor sit amet.
        <span class="accordion__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </div>
      <div class="accordion__body js-accordion-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae. Non, reprehenderit!
        </p>
      </div>
    </div>
    <div class="accordion__item js-accordion-item">
      <div class="accordion__header js-accordion-header">
        Lorem ipsum dolor sit amet.
        <span class="accordion__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </div>
      <div class="accordion__body js-accordion-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae. Non, reprehenderit!
        </p>
      </div>
    </div>
  </div>
  `
}
