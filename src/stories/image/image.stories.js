import { createComponent as Image } from './image'
import image from '../../assets/images/image.jpg'
import './image.scss'

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    image: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    image: image,
    description: 'This is image'
  }
}

export const Default = {}
