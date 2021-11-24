$(function () {

  $('.select-style').styler();

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  })

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });

  $('.button-list').on('click', function () {
    $('.shop-content__item').addClass('shop-content__item--list');
  });

  $('.button-grid').on('click', function () {
    $('.shop-content__item').removeClass('shop-content__item--list');
  });

  $('.button-list').on('click', function () {
    $('.shop-content__list').addClass('shop-content__list--active');
  });

  $('.button-grid').on('click', function () {
    $('.shop-content__list').removeClass('shop-content__list--active');
  });

  $(".shop__price-input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
        $('.shop__price-from').text(data.from);
        $('.shop__price-to').text(data.to);
      },
      onChange: function (data) {
        $('.shop__price-from').text(data.from);
        $('.shop__price-to').text(data.to);
      },
  });


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

    /* Подскажи как мне решить проблему, у меня при выполнении этого breakpoint пропадает фоновая картинка, item присваиваются какие-то свойства и все ломается */
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

  $('.catalog').on('click', function () {
    $('.catalog').toggleClass('catalog--active');
    $('.catalog__list').toggleClass('catalog__list--active');
  });

  $('.shop-content__filter-mobile').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--active');
/*     $('.shop-content__item').toggleClass('shop-content__item--active'); */
    $('.main').toggleClass('main--active');
  });

  $('.filter__btn').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--active');
    $('.main').toggleClass('main--active');
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