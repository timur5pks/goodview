const slidesContainer = document.querySelector('.slider__slides-container');
const testimonialsContainer = document.querySelector('.testimonials')

const swiper = new Swiper(slidesContainer, {
  speed: 1200,
  loop: true,
  slideClass: 'slider__slide',
  wrapperClass: 'slider__slides',
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev'
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active'
  },
});

const testimonialsSwiper = new Swiper(testimonialsContainer, {
  speed: 1200,
  loop: true,
  slideClass: 'testimonials__quote',
  wrapperClass: 'testimonials__slides',
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.testimonials__pagination-of-slider',
    type: 'bullets',
    clickable: true,
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active'
  },
})