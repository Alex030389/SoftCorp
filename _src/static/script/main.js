'use strict';


// header
if (document.querySelector('.header')) {
  const header = document.querySelector('.header')
  const scrollChange = 200;
  let flagHeaderFixed = false;

  const showHeader = () => {
    header.classList.add("header--fixed");
    header.classList.add("animate__fadeInDown");
    flagHeaderFixed = true;
    setTimeout(() => {
      header.classList.remove("animate__fadeInDown");
    }, 800);
  };

  const hideHeader = () => {
    flagHeaderFixed = false;
    header.classList.remove("header--fixed");
  }

  window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;

    if (scrollpos >= scrollChange && !flagHeaderFixed) {
      showHeader();
    } else if (scrollpos < 2 && flagHeaderFixed)  {
      hideHeader();
    }
  })
}


// blur button outline on click
if (document.querySelector('button')) {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('mouseup', function () {
      this.blur();
    });
  });
}


// open close mobile menu
if (document.querySelector('.header__btn-hamburger')) {
  const btnOpenMenu = document.querySelector('.header__btn-hamburger'),
        btnCloseMenu = document.querySelector('.header__btn-close'),
        wrapMenu = document.querySelector('.header__wrap-menu'),
        menu = document.querySelector('.header__menu'),
        body = document.body;
  let flagMenuOpen = false;

  const openMenu = () => {
    wrapMenu.classList.add('header__wrap-menu--show');
    wrapMenu.classList.add('animate__fadeIn');
    menu.classList.add('animate__fadeInRight');
    body.classList.add('scroll-loc');
    flagMenuOpen = true;

    setTimeout(() => {
      wrapMenu.classList.remove('animate__fadeIn');
      menu.classList.remove('animate__fadeInRight');
    }, 500)
  };

  const closeMenu = () => {
    wrapMenu.classList.add('animate__fadeOut');
    menu.classList.add('animate__fadeOutRight');
    body.classList.remove('scroll-loc');
    flagMenuOpen = false;

    setTimeout(() => {
      wrapMenu.classList.remove('animate__fadeOut');
      wrapMenu.classList.remove('header__wrap-menu--show');
      menu.classList.remove('animate__fadeOutRight');
    }, 500)
  };

  btnOpenMenu.addEventListener('click', () => {
    openMenu();
  });

  wrapMenu.addEventListener('click', (evt) => {
    if(evt.target === wrapMenu) {
      closeMenu();
    }
  });

  btnCloseMenu.addEventListener('click', () => {
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (getComputedStyle(btnOpenMenu).display === 'none' && flagMenuOpen) {
      closeMenu();
    }
  });
}


//  input file
if (document.querySelector('.input-file__input')) {
  const inputFile = document.querySelectorAll('.input-file__input');

  inputFile.forEach((input) => {
    const label = input.nextElementSibling,
          inputFileStatus = label.querySelector('.input-file__status').innerText;

    input.addEventListener('change', function (e) {
      let fileName = '';
      fileName = e.target.value.split('\\').pop();

      let countFiles = '';
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles) {
        label.querySelector('.input-file__status').innerText = fileName;
      } else {
        label.querySelector('.input-file__status').innerText = inputFileStatus;
      }
    });
  });
}


// form slider
if (document.querySelector('.form-slider')) {
  const slider = document.querySelector('.form-slider');

  noUiSlider.create(slider, {
    start: 75,
    step: 1,
    range: {
      min: 0,
      max: 100,
    },
  });

  const rangeValue = document.querySelector('.range__value');
  const formControlRange = document.querySelector('.form-control-range');
  slider.noUiSlider.on('update', (values, handle) => {
    let value = parseInt(values[handle]);
    rangeValue.innerHTML = value + '%';
    formControlRange.value = value;
  });
}


// select
$('.form-control-select').selectric();
$('.form-control-select').on('selectric-open', function () {
  $('.selectric-scroll').mCustomScrollbar();
});
