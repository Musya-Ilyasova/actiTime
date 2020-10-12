
$('.futures-slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1599,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});