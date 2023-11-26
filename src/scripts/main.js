import { initUploader } from './uploader'
import { initModals } from './modal'
import { initCollapses } from './collapse'
import { initTabs } from './tabs'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModals()
  initCollapses()
  initTabs()
})
