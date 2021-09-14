$(function () {

  $('.slider-top__list').slick({
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
    /* responsive: [
      {
      breakpoint: 769,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ], */

    /* Подскажи как мне решить проблему, у меня при выполнении этого breakpoint пропадает фоновая картинка, item присваиваются какие-то свойства и все ламается, не */
  })


  $('.users__link--btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
  });

  $('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });

  $('.form__icon').on('click', function () {
    $('.form__icon').toggleClass('form__icon--active');
    $('.form__box').toggleClass('form__box--active');
  });

  $(".logo").on("click", function (e) {
    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



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