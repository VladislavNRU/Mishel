// swiper for card
var swiper = new Swiper(".swiper-card", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper for partners

var swiperPartners = new Swiper(".swiper-partners", {
  slidesPerView: 6,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-partners__next",
    prevEl: ".swiper-partners__prev",
  },
});

// swiper for feedback

var swiperFeedback = new Swiper(".swiper-card__feedback", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-feedback__next",
    prevEl: ".swiper-feedback__prev",
  },
});

// swiper for catalog

var swiperCatalog = new Swiper(".swiper-catalog", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swipper-caralog__bth--next",
    prevEl: ".swipper-caralog__bth--prev",
  },
});

// slider for one-review

var swiperCatalog = new Swiper(".swiper-review-one", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-review-one__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-review_btn--next",
    prevEl: ".swiper-review_btn--prev",
  },
});

// tabs for faq

const tabs = document.getElementsByClassName('faq-wrapper__question');  
const sections = document.getElementsByClassName('faq-wrapper__answer'); 

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));

function tabClick(event) {
  const tabId = event.target.dataset.id;

  [...tabs].forEach((tab, i) => {
    tab.classList.remove('active');
    sections[i].classList.remove('active');
  })

  tabs[tabId - 1].classList.add('active');
  sections[tabId - 1].classList.add('active');
}

// clients 

let estate = document.querySelector('.header-bottom-nav__clients');
let menu = document.querySelector('.header-dropdown')

const estateTab = () => {
  estate.classList.toggle('active')
  menu.classList.toggle('active')
}

estate.addEventListener('click', estateTab)


// costom-select

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();

