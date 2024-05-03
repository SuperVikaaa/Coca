import Swiper from 'swiper';
import { Autoplay, Navigation, Scrollbar, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: '2.5',
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
      769: {
        spaceBetween: 32,
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: '3',
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },

    breakpoints: {
      769: {
        spaceBetween: 32,
      },
    },
  });
};
