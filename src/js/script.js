
$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: false,
    prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});

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