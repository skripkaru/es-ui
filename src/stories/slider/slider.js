import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export const initSlider = () => {
  new Swiper('.js-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.js-slider .navigation__next',
      prevEl: '.js-slider .navigation__prev'
    }
  })
}

export const createComponent = (args) => {
  const component = document.createElement('div')

  const wrapper = document.createElement('div')
  wrapper.classList.add('swiper-wrapper')

  args.slides.forEach((item) => {
    const slide = document.createElement('div')
    slide.classList.add('swiper-slide')

    const img = document.createElement('img')
    img.src = item.image
    img.alt = item.title
    slide.appendChild(img)
    wrapper.appendChild(slide)
  })

  const navigation = document.createElement('div')
  navigation.classList.add('navigation')
  navigation.innerHTML = `
    <button class="navigation__button navigation__prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
      </svg>
    </button>
    <button class="navigation__button navigation__next">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
    </button>
  `
  component.appendChild(wrapper)
  component.appendChild(navigation)

  component.className = ['slider', 'swiper', 'js-slider'].join(' ')
  return component
}
