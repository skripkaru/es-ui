export const Accordion = () => {
  const accordion = document.createElement('div')
  accordion.innerHTML = `
    <div class="accordion__item js-accordion-item">
      <div class="accordion__header js-accordion-header">
         Lorem ipsum dolor sit amet.
        <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
      <div class="accordion__body js-accordion-body">
        <div class="accordion__body-inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae. Non, reprehenderit!
        </div>
      </div>
    </div>
  `
  accordion.className = ['accordion', 'js-accordion'].join(' ')

  return accordion
}
