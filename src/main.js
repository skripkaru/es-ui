import { initAccordion } from './stories/accordion/accordion'
import { initInput } from './stories/input/input'
import { initInputNumber } from './stories/inputNumber/inputNumber'
import { initInputRange } from './stories/inputRange/inputRange'
import { initMessage } from './stories/message/message'
import { initModal } from './stories/modal/modal'
import { initSelect } from './stories/select/select'
import { initSlider } from './stories/slider/slider'
import { initTabs } from './stories/tabs/tabs'
import { initTooltip } from './stories/tooltip/tooltip'
import { initUploader } from './stories/uploader/uploader'
import { initVideo } from './stories/video/video'

document.addEventListener('DOMContentLoaded', () => {
  initAccordion()
  initInputNumber()
  initInput()
  initInputRange()
  initMessage()
  initModal()
  initSelect()
  initSlider()
  initTabs()
  initTooltip()
  initUploader()
  initVideo()
})
