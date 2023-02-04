import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.presentation__content', {
  slidesPerView: 'auto',
  scrollbar: {
    el: '.presentation__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.presentation__slider-btn--next',
    prevEl: '.presentation__slider-btn--prev',
  },
});