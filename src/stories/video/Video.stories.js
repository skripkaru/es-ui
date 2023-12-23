import { Video } from './Video'
import './video.scss'
import image from '../../assets/images/image.jpg'

export default {
  title: 'Data/Video',
  component: Video,
  argTypes: {
    url: { control: 'text' },
    image: { control: 'text' }
  },
  args: {
    url: 'https://www.youtube.com/embed/X8zLJlU_-60?si=z0cEZ7krZvZ7HT9d',
    image: image
  }
}

export const Default = {}
