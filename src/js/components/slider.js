import Swiper from 'swiper';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
