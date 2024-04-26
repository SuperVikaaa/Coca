import Swiper from 'swiper';
import { Autoplay, Navigation, Scrollbar, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: '2.5',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

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

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: '3',
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
