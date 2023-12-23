import { initUploader } from './uploader'
import { initModal } from './modal'
import { initTabs } from './tabs'
import { initAccordion } from './accordion'
import { initSelect } from './select'
import { initSlider } from './slider'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModal()
  initTabs()
  initAccordion()
  initSelect()
  initSlider()
})
