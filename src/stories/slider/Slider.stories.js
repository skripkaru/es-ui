import { Slider } from './Slider'
import './slider.scss'
import '../navigation/navigation.scss'
import slide1 from '../../assets/images/slide-01.jpg'
import slide2 from '../../assets/images/slide-02.jpg'
import slide3 from '../../assets/images/slide-03.jpg'
import slide4 from '../../assets/images/slide-04.jpg'

export default {
  title: 'Basic/Slider',
  component: Slider,
  args: {
    slides: [
      { image: slide1, title: 'Big Ben' },
      { image: slide2, title: 'London skyline' },
      { image: slide3, title: 'Tower Bridge' },
      { image: slide4, title: 'Rain man' }
    ]
  }
}

export const Default = {}
