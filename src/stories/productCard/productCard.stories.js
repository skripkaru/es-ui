import { createProductCard as ProductCard } from './productCard'
import image from '../../assets/images/image.jpg'
import './product-card.scss'
import '../button/button.scss'

export default {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      options: ['reverse'],
      control: { type: 'radio' }
    }
  },
  args: {
    image: image,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Default = {}

export const Reverse = {
  args: {
    variant: 'reverse'
  }
}
