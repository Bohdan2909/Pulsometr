
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


//Send form
$('form').submit(function(e) {
  e.preventDefault();
  if(!$(this).valid()){
    return;
  }

  $.ajax({
     type: "POST",
     url: "mailer/php.smart",
     data: $(this).serialize()
  }).done(function(){
    $(this).find('input').val("");

    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn("slow");

    $('form').trigger('reset');
  });
  return false;
});


// Scroll to Up
$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
//Animate
// $("a[href^='#']").click(function () {
//   const _href = $(this).attr("href");
//   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//   return false;
// });

$("a, #up").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
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