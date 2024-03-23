import { createCard as Card } from './card'
import './card.scss'
import image from '../../assets/images/image.jpg'

export default {
  title: 'Card',
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
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae. Non, reprehenderit!'
  }
}

export const Default = {}
