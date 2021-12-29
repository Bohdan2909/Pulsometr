
$(document).ready(function () {
  //Slick
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
  //Tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
        .index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //Modal

  $('[data-modal=consultation]').on('click', () => {
    $('.overlay, #consultation').fadeIn('slow');
  });
  
  $('.modal__close').on('click', () => {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  // $('.button_mini').on('click', () => {
  //   $('.overlay, #order').fadeIn('slow');
  // });
  $('.button_mini').each(function (i){
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

//Validate Form
function validateForm (form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages:{
      name: "Пожалуйста введите свое имя"
    }
  });
}
validateForm('#consultation-form');
validateForm('#consultation form');
validateForm('#order form');



});












// Alternative Slider
/* const slider = tns({
  container: '.carousel__inner',
  items: 1, //q-ty slides
  slideBy: 'page',
  autoplay: true,
  controls: false, //deleted prev/next buttons
  nav: false  //delete dots
});
document.querySelector('.slick-prev').addEventListener('click', function () {
  slider.goTo('slick-prev');
});
document.querySelector('.slick-next').addEventListener('click', function () {
  slider.goTo('slick-next');
}); */