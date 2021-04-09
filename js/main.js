const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
  
});

const swiper2 = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
  
});

const swiper3 = new Swiper('.food-drink-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.food-drink-button-next',
    prevEl: '.food-drink-button-prev',
  },
  
});
