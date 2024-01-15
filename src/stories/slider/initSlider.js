import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export const initSlider = () => {
  new Swiper('.js-slider', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.js-slider .navigation__next',
      prevEl: '.js-slider .navigation__prev'
    }
  })
}
