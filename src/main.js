import { initUploader } from './stories/uploader/initUploader'
import { initModal } from './stories/modal/initModal'
import { initTabs } from './stories/tabs/initTabs'
import { initAccordion } from './stories/accordion/initAccordion'
import { initSelect } from './stories/select/initSelect'
import { initSlider } from './stories/slider/initSlider'
import { initVideo } from './stories/video/initVideo'
import { initHeader } from './stories/header/initHeader'
import { initMenu } from './stories/menu/initMenu'
import { initCustomSelect } from './stories/customSelect/initCustomSelect'

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
  initCustomSelect()
})
