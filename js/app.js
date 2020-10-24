"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mySwiper = new Swiper('.swiper-container', {
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    320: _defineProperty({
      slidesPerView: 1,
      spaceBetween: 12
    }, "slidesPerView", 1.1)
  }
});