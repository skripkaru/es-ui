import { initUploader } from './uploader'
import { initModal } from './modal'
import { initTabs } from './tabs'
import { initAccordion } from './accordion'
import { initSelect } from './select'
import { initSlider } from './slider'
import { initVideo } from './video'
import { initHeader } from './header'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModal()
  initTabs()
  initAccordion()
  initSelect()
  initSlider()
  initVideo()
  initHeader()
})
