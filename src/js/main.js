import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
});
