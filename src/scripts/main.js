import { initUploader } from './uploader'
import { initModals } from './modal'
import { initTabs } from './tabs'
import { initAccordion } from './accordion'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModals()
  initTabs()
  initAccordion()
})
