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
}
