import { Card } from './Card'
import './card.scss'
import image from '../../assets/images/image.jpg'

export default {
  title: 'Data/Card',
  component: Card,
  argTypes: {
    image: { control: 'text' },
    url: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' }
  },
  args: {
    image: image,
    url: '#',
    title: 'London',
    description: 'London is a famous and historic city. It is the capital of England in the United Kingdom.'
  }
}

export const Default = {}
