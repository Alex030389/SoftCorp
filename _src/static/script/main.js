'use strict';

// ////////////////////////////////////// open close mobile menu
const $headerBtnHamburger = $('.header__btn-hamburger');
const $mainMenu = $('.main-menu');

$headerBtnHamburger.on('click', function() {
  $mainMenu.toggleClass('main-menu--active');
  $(this).toggleClass('header__btn-hamburger--active')
  $('body').toggleClass('scroll-loc');
})

$(window).on('resize', function() {
  if ($headerBtnHamburger.is(':hidden')) {
    $mainMenu.removeClass('main-menu--active');
    $headerBtnHamburger.removeClass('header__btn-hamburger--active');
    $('body').removeClass('scroll-loc');
  } 
})


// ////////////////////////////////////// input file
let inputFile = document.querySelectorAll('.input-file__input');
Array.prototype.forEach.call(inputFile, function (input) {
	let label = input.nextElementSibling,
	inputFileStatus = label.querySelector('.input-file__status').innerText;

	input.addEventListener('change', function (e) {
		let fileName = '';
		fileName = e.target.value.split('\\').pop();

		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles) {
			label.querySelector('.input-file__status').innerText = fileName;
     } else {
      label.querySelector('.input-file__status').innerText = inputFileStatus;
    }
	});
});


// //////////////////////////////////////////// form slider
const slider = document.querySelector('.form-slider');

noUiSlider.create(slider, {
  start: 75,
  step: 1,
  range: {
    min: 0,
    max: 100      
  }
});

const rangeValue = document.querySelector('.range__value');
const formControlRange = document.querySelector('.form-control-range');
slider.noUiSlider.on('update', function (values, handle) {
  let value = parseInt(values[handle]);
  rangeValue.innerHTML = value + '%';
  formControlRange.value = value;
});


// ////////////////////////////////////////////// select
$('.form-control--select').selectric();
$('.form-control--select').on('selectric-open', function() {
  $('.selectric-scroll').mCustomScrollbar();
});