AOS.init();

//Swiper
//Swiper
var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 0,
      },
      360: {
        slidesPerView: 2,
      },
      568:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 2,
      },
      1020:{
        slidesPerView: 3,
    },
  },
});