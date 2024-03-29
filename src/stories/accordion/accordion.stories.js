import { createComponent as Accordion } from './accordion'
import './accordion.scss'

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    items: [
      {
        title: 'About',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae.'
      },
      {
        title: 'News',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae.'
      },
      {
        title: 'Settings',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut enim est et, id ipsum magnam maxime nulla odio quas quia quo, quod reiciendis repudiandae sed soluta, vitae.'
      }
    ]
  }
}

export const Default = {}
