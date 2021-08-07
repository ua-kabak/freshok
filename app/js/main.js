$(function () {
  
  $('.slider__inner').slick({
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
  })

  var mixer = mixitup('.top-products__list');

});