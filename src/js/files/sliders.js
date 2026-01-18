export default function sliders() {
  const sliderNavServices = document.querySelector(".s-services__nav-slider");

  if (sliderNavServices) {
    const swiper = new Swiper(sliderNavServices, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        prevEl: ".s-services .slider-arrow._prev",
        nextEl: ".s-services .slider-arrow._next",
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  const sliderTeam = document.querySelector(".s-team__slider");

  if (sliderTeam) {
    const swiper = new Swiper(sliderTeam, {
      speed: 900,
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        prevEl: ".s-team .slider-arrow._prev",
        nextEl: ".s-team .slider-arrow._next",
      },
      pagination: {
        clickable: true,
        el: ".s-team .slider-pagination",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });
  }
}
