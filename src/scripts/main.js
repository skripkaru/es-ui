import { initUploader } from './uploader'
import { initModals } from './modal'
import { initTabs } from './tabs'
import { initAccordion } from './accordion'
import { initSelect } from './select'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModals()
  initTabs()
  initAccordion()
  initSelect()
})
