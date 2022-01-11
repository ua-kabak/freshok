$(function () {

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $(".product-item__rating, .comments__rating, .comments-form__rating, .comments-form__radio-star").rateYo({
    rating: 4.0,
    starWidth: "16px",
    normalFill: "#ececec",
    ratedFill: "#FFB800",
    spacing: "6px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height = "16px" viewBox = "0 0 18 16" version = "1.1"> <g id = "surface1"><path d = "M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688"/></g></svg>'
  });

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
  })

  $('.recent__list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 376,
        settings: {
          dots: true,
        }
      },
    ]
  })

  $('.product-item__slider').slick({
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
    responsive: [{
      breakpoint: 376,
      settings: {
        arrows: false,
      }
    }, ]
  });

  $('.product-item__slider').slickLightbox({
    src: 'src',
    itemSelector: '.product-item__picture',
    background: 'rgba(0, 0, 0, 0.15);',
  });

  $('.product-item__picture').on('click', function () {
    $('.product-item__picture').toggleClass('.product-item__picture--active');
    /*  $('.burger-menu').toggleClass('burger-menu--active'); */
  });




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