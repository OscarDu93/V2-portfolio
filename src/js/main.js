import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".swiper-container", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

var link = $(".pagination__link");
link.on("click", function () {
  link.removeClass("is_active");
  $(this).addClass("is_active");
});
