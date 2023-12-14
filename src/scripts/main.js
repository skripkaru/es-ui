import { initUploader } from './uploader'
import { initModals } from './modal'
import { initTabs } from './tabs'
import { initAccordion } from './accordion'
import { initSelect } from './select'
import { initSlider } from './slider'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModals()
  initTabs()
  initAccordion()
  initSelect()
  initSlider()
})
