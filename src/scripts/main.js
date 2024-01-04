import { initUploader } from './components/uploader'
import { initModal } from './components/modal'
import { initTabs } from './components/tabs'
import { initAccordion } from './components/accordion'
import { initSelect } from './components/select'
import { initSlider } from './components/slider'
import { initVideo } from './components/video'
import { initHeader } from './components/header'
import { initMenu } from './components/menu'

document.addEventListener('DOMContentLoaded', () => {
  initUploader()
  initModal()
  initTabs()
  initAccordion()
  initSelect()
  initSlider()
  initVideo()
  initHeader()
  initMenu()
})
