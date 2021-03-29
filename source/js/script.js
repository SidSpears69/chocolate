"use strict";
const previewSlides = document.querySelectorAll(".slider-preview__slide");
const productImg = document.querySelector(".product-images__img");
const customNumber = document.querySelector(".custom-number");
const tabsToggle = document.querySelectorAll(".tabs__toggle");
const sliderPreview = new Swiper(".slider-preview", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    550: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});
previewSlides.forEach(slide => {
  slide.addEventListener("click", () => {
    previewSlides.forEach(slide => {
      slide.classList.remove("slider-preview__slide--active");
    })
    slide.classList.add("slider-preview__slide--active");
    productImg.src = slide.querySelector("img").dataset.img;
  })
})
function initCustomNumber(customNumber) {
  const buttonLess = customNumber.querySelector(".custom-number__button--less");
  const buttonMore = customNumber.querySelector(".custom-number__button--more");
  const input = customNumber.querySelector("input");
  buttonLess.addEventListener("click", () => {
    if (input.value > 1) {
      input.value--;
      buttonLess.setAttribute("aria-disabled", false);
    }
    else {
      buttonLess.setAttribute("aria-disabled", true);
    }
  })
  buttonMore.addEventListener("click", () => {
    input.value++;
  })
}
initCustomNumber(customNumber);
const similarSlider = new Swiper(".similar__slider", {
  slidesPerView: 2,
  spaceBetween: 15,
  navigation: {
    nextEl: '.similar__button--next',
    prevEl: '.similar__button--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  }
});
tabsToggle.forEach(tab => {
  tab.addEventListener("click", (evt) => {
    tabsToggle.forEach(tab => {
      if(tab != evt.target) {
        tab.setAttribute("aria-selected", false);
      }
    })
    tab.getAttribute("aria-selected") == "true" ? tab.setAttribute("aria-selected", false) : tab.setAttribute("aria-selected", true);
  })
})
