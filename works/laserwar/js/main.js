$(function(){

    $('#complects-carousel-1').owlCarousel({
        mouseDrag: true,
        items: 4,
        dots: false,
        nav: true,
        loop: false,
        navText: false,
        rewind: false,
        margin: 30,
        stageClass: 'complects__slider-carousel',
        smartSpeed: 250,
        responsive: {
            1200: {
              items: 4
            },
            860: {
              items: 4
            },
            640: {
              items: 3,
            },
            0: {
              items: 2,
              margin: 0,
            }
        }
    })
    $('#complects-carousel-2').owlCarousel({
        mouseDrag: true,
        items: 4,
        dots: false,
        nav: true,
        loop: false,
        navText: false,
        rewind: false,
        margin: 30,
        stageClass: 'complects__slider-carousel',
        smartSpeed: 250,
        responsive: {
            1200: {
              items: 4
            },
            860: {
              items: 4
            },
            640: {
              items: 3,
            },
            0: {
              items: 2,
              margin: 0,
            }
        }
    })
    $('#complects-carousel-3').owlCarousel({
        mouseDrag: true,
        items: 4,
        dots: false,
        nav: true,
        loop: false,
        navText: false,
        rewind: false,
        autoWidth: true,
        margin: 50,
        stageClass: 'complects__slider-carousel',
        smartSpeed: 250,
        responsive: {
            1200: {
              items: 4
            },
            860: {
              items: 4
            },
            640: {
              items: 3,
            },
            0: {
              items: 2,
              margin: 0,
            }
        }
    })
    $('#complects-carousel-4').owlCarousel({
        mouseDrag: true,
        items: 4,
        dots: false,
        nav: true,
        loop: false,
        navText: false,
        rewind: false,
        margin: 30,
        stageClass: 'complects__slider-carousel',
        smartSpeed: 250,
        responsive: {
          1200: {
            items: 4
          },
          860: {
            items: 4
          },
          640: {
            items: 3,
          },
          0: {
            items: 2,
            margin: 0,
          }
        }
    })
    $('#advantages-slider').owlCarousel({
        mouseDrag: true,
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        navText: false,
        rewind: false,
        smartSpeed: 250,
    })
  
});