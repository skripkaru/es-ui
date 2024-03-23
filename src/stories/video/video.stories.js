import { createVideo as Video } from './video'
import './video.scss'
import image from '../../assets/images/image.jpg'

export default {
  title: 'Video',
  component: Video,
  argTypes: {
    url: { control: 'text' },
    image: { control: 'text' }
  },
  args: {
    videoId: 'LRZpE-Av10c?si=bkjcsk9EyNaPlt1Y',
    image: image
  }
}

export const Default = {}
