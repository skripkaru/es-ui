import { initAccordion } from './stories/accordion/accordion'
import { initInputNumber } from './stories/inputNumber/inputNumber'
import { initModal } from './stories/modal/modal'
import { initSelect } from './stories/select/select'
import { initSlider } from './stories/slider/slider'
import { initTabs } from './stories/tabs/tabs'
import { initUploader } from './stories/uploader/uploader'
import { initVideo } from './stories/video/video'

document.addEventListener('DOMContentLoaded', () => {
  initAccordion()
  initInputNumber()
  initModal()
  initSelect()
  initSlider()
  initTabs()
  initUploader()
  initVideo()
})
