$(function(){
  let timer = 1;
  let timerRefresh = function() {
    timer = 0;
    return timer;
  }
  let timerLoad = function() {
    timer = 1;
    return timer;
  }
  setTimeout(timerLoad, 2000);
  let timerId = setInterval(timerLoad, 2000);
  
  if ($('body').width() < 1200) {
    $('#wrap').owlCarousel({
      mouseDrag: false,
      items: 1,
      dots: false,
      nav: false,
      loop: false,
      autoplay: false,
      slideBy: 1,
      animateIn: 'slideInDown',
      animateOut: 'slideOutUp'
    });
  }
  else {
    $('#wrap').owlCarousel({
      mouseDrag: false,
      items: 1,
      dots: false,
      nav: false,
      loop: false,
      autoplay: false,
      slideBy: 1,
    });
  }

  $(".cases-slider").owlCarousel({
      mouseDrag: false,
      items: 1,
      responsive:{
          1200:{
              items: 2
          }
      },
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      dots: false,
      nav: false,
      autoplay: true,
      loop: true,
      smartSpeed: 250
  });
  $( "#accordion" ).accordion({
    autoHeight: true,
    header: '> .chanels-menu__item > .chanels-menu__item-heading'
    }
  );
  $(".feedback-menu__btn").click(function() {
    $('.feedback-menu-mobile').toggleClass('feedback-menu-mobile-active');
  })
  $('#close-feedback-menu').click(function() {
    $('.feedback-menu-mobile').toggleClass('feedback-menu-mobile-active');
  })
  $('#header-menu-btn').click(function() {
    $('.main-menu').toggleClass('menu-active');
  })
  $('#close-menu').click(function() {
    $('.main-menu').toggleClass('menu-active');
  })
  $('#analytics-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 4);
  })
  $('#marketing-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 6);
  })
  $('#sales-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 8);
  })
  $('#pricing-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 10);
  })
  $('#cases-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 2);
  })
  $('#chanels-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 12);
  })
  $('#map-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 14);
  })
  $('#feedback-link').click(function(e) {
    e.preventDefault();
    $('#wrap').trigger('to.owl.carousel', 15);
  })

  $('#wrap').on('mousewheel', '.owl-stage', function (e) {
    if ( timer == 1) {
      if (e.originalEvent.deltaY>0) {
        $('#wrap').trigger('next.owl', 2000);
        timerRefresh();
      } else {
        $('#wrap').trigger('prev.owl', 2000);
        timerRefresh();
      }
      e.preventDefault();
    }
  });


  new CircleType(document.getElementById('rounded-text'))
  .radius();

  // particles start here
  particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 180,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });
  particlesJS("particles-js2", {
      "particles": {
        "number": {
          "value": 180,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });
  particlesJS("particles-js3", {
      "particles": {
        "number": {
          "value": 180,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });
    
});