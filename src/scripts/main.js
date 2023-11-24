import { imageUploader } from './imageUploader'
import { initModals } from './modal'
import { initCollapses } from './collapse'
import { initTabs } from './tabs'

document.addEventListener('DOMContentLoaded', () => {
  imageUploader()
  initModals()
  initCollapses()
  initTabs()
})
