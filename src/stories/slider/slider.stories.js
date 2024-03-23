import { createSlider as Slider } from './slider'
import './slider.scss'
import '../navigation/navigation.scss'
import slide1 from '../../assets/images/slide-01.jpg'
import slide2 from '../../assets/images/slide-02.jpg'
import slide3 from '../../assets/images/slide-03.jpg'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    slides: [
      { image: slide1, title: 'Lorem ipsum dolor.' },
      { image: slide2, title: 'Lorem ipsum dolor.' },
      { image: slide3, title: 'Lorem ipsum dolor.' }
    ]
  }
}

export const Default = {}
