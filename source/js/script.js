"use strict";
const previewSlides = document.querySelectorAll(".slider-preview__slide");
const productImg = document.querySelector(".product-images__img");
const customNumber = document.querySelector(".custom-number");
const tabsToggle = document.querySelectorAll(".tabs__toggle");
const menuToggle = document.querySelector('.menu__toggle')
const siteList = document.querySelector('.site-list')
const submenuToggle = document.querySelectorAll('.menu__link--with-submenu');
const productsToggle = document.querySelectorAll('.submenu__link--with-products');
const productsMenu = document.querySelectorAll('.submenu-products');
const desktopVersion = window.matchMedia("(min-width: 1200px)").matches;

menuToggle.addEventListener('click', (evt) => {
  const toggler = evt.target;
  toggler.getAttribute("aria-expanded") == "false" ? toggler.setAttribute("aria-expanded", true) : toggler.setAttribute("aria-expanded", false);
  submenuToggle.forEach(item => {
    item.setAttribute("aria-expanded", false);
  })
})
function controlGroupAttributes(elements, item, attribute) {
  item.addEventListener("click", (evt) => {
    elements.forEach(item => {
      if (item != evt.target) {
        item.setAttribute(attribute, false);
      }
    })
    item.getAttribute(attribute) == "true" ? item.setAttribute(attribute, false) : item.setAttribute(attribute, true);
  })
}

submenuToggle.forEach(item => {
  if (desktopVersion) {
    item.parentElement.addEventListener("mouseover", (evt) => {
      item.setAttribute("aria-expanded", true);
    })
    item.parentElement.addEventListener("mouseleave", (evt) => {
      item.setAttribute("aria-expanded", false);
    })
    item.addEventListener("focusin", (evt) => {
      item.setAttribute("aria-expanded", true);
      submenuToggle.forEach(item => {
        if (item != evt.target) {
          item.setAttribute("aria-expanded", false);
        }
      })
    })
  }
  else {
    controlGroupAttributes(submenuToggle, item, "aria-expanded");
  }
})
if (desktopVersion) {
  productsToggle.forEach((item, index) => {
    toggleProductsSubmenu("mouseover", item, index);
    toggleProductsSubmenu("focusin", item, index);
  })
};
function toggleProductsSubmenu(action, item, index) {
  item.addEventListener(action, (evt) => {
    productsMenu.forEach(item => {
      if (item != evt.target) {
        item.classList.remove("submenu-products--opened");
      }
    });
    productsToggle.forEach(item => {
      if (item != evt.target) {
        item.classList.remove("submenu__link--active");
      }
    })
    item.classList.add("submenu__link--active");
    productsMenu[index].classList.add("submenu-products--opened");
  })
}
typeof Swiper !== 'undefined' && new Swiper(".slider-preview", {
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
customNumber && initCustomNumber(customNumber);
typeof Swiper !== 'undefined' && new Swiper(".similar__slider", {
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
typeof Swiper !== 'undefined' && new Swiper(".banner-slider", {
  slidesPerView: 1,
  pagination: {
    el: '.banner-slider__pagination',
    type: 'bullets',
  },
});
tabsToggle.forEach(item => {
  controlGroupAttributes(tabsToggle, item, "aria-selected");
})

