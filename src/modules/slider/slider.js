$('.owl-carousel').owlCarousel({
  loop:false,
  margin: 0,
  nav:false,
  startPosition: 0,
  responsive:{
    0:{
      items:1,
      slideBy:1,
    },
    600:{
      items:1,
      slideBy:1
    },
    993:{
      items:2,
      slideBy:2
    }
  }
});
