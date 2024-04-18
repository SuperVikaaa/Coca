import Swiper from 'swiper';
import { Autoplay, Navigation, Scrollbar, Pagination } from 'swiper/modules';
import 'swiper/css';

export const usePartnersSlider = () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback,
  ) => {
    let swiper;
  
    breakpoint = window.matchMedia(breakpoint);
  
    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
  
      if (callback) {
        callback(swiper);
      }
    };
  
    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };
  
    breakpoint.addEventListener('change', checker);
    checker();
  };
  
  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on('slideChange', function (e) {
  //       console.log('*** mySwiper.activeIndex', instance.activeIndex);
  //     });
  //   }
  // };
  
  resizableSwiper('(max-width: 576px)', '.slider-1', {
    modules: [Autoplay, ],
    slidesPerView: '2',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    loopPreventsSlide: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
  });
  
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: '2', // Fix insight, теперь скроллится корректно 
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    effect: 'fade',
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
