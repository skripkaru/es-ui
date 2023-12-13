import { Image } from './Image'
import './image.scss'
import image from '../../assets/images/image.jpg'

export default {
  title: 'Data/Image',
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
