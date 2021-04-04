"use strict";
const previewSlides = document.querySelectorAll(".slider-preview__slide");
const productImg = document.querySelector(".product-images__img");
const quantityPageProduct = document.querySelector(".add-basket__quantity");
const tabsToggle = document.querySelectorAll(".tabs__toggle");
const menuToggle = document.querySelector('.menu__toggle')
const siteList = document.querySelector('.site-list')
const submenuToggle = document.querySelectorAll('.menu__link--with-submenu');
const productsToggle = document.querySelectorAll('.submenu__link--with-products');
const productsMenu = document.querySelectorAll('.submenu-products');
const desktopVersion = window.matchMedia("(min-width: 1200px)").matches;
const search = document.querySelector('.user-menu-search');
const searchToggle = search.querySelector('.user-menu-search__btn');
const searchInput = search.querySelector('.user-menu-search__input');

menuToggle.addEventListener('click', (evt) => {
  const toggler = evt.target;
  toggler.getAttribute("aria-expanded") == "false" ? toggler.setAttribute("aria-expanded", true) : toggler.setAttribute("aria-expanded", false);
  submenuToggle.forEach(item => {
    item.setAttribute("aria-expanded", false);
  })
})
const controlGroupAttributes = (elements, item, attribute) => {
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
const toggleProductsSubmenu = (action, item, index) => {
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
if (desktopVersion) {
  productsToggle.forEach((item, index) => {
    toggleProductsSubmenu("mouseover", item, index);
    toggleProductsSubmenu("focusin", item, index);
  })
};

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

typeof CustomNumber !== 'undefined' && quantityPageProduct && new CustomNumber(quantityPageProduct);
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
searchToggle && searchToggle.addEventListener("click", (evt) => {
  const button = evt.currentTarget;
  button.getAttribute("aria-expanded") == "true" ? button.setAttribute("aria-expanded", false) : button.setAttribute("aria-expanded", true);
  searchInput.classList.toggle("user-menu-search__input--active");
})
typeof GraphModal !== 'undefined' && new GraphModal({
  isOpen: (modal) => {
    modal.previousActiveElement.setAttribute("aria-expanded", true);
  },
  isClose: (modal) => {
    modal.previousActiveElement.setAttribute("aria-expanded", false);
  }
});

