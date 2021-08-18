$(function () {

  $('.slider-top__list').slick({
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
  })



  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


});