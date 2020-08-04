$(function () {

  //header btn
  $('.menu-btn').click(function() {
    $(this).toggleClass('active');
    $('.header__nav-list').toggleClass('active');
  })

  //header-slider customs
  $(".header__slider").owlCarousel({
      mouseDrag: false,
      items: 1,
      dots: true,
      dotsContainer: '.header__slider-dots',
      nav: false,
      startPosition: 2,
      loop: true,
      smartSpeed: 750
  });
  $('.slider-item__arrow-right').click(function() {
      $('.header__slider').trigger('next.owl.carousel');
  });

  $('.slider-item__arrow-left').click(function() {
      $('.header__slider').trigger('prev.owl.carousel');
  });
  $('.header__slider-dot').click(function () {
      $('.header__slider').trigger('to.owl.carousel', [$(this).index()]);
  });
  
  //end of header slider

  //surf slider customs
  $(".surf-slider").owlCarousel({
      mouseDrag: false,
      items: 4,
      dots: false,
      stageClass: 'surf-stage',
      nav: false,
      loop: false,
      rewind: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 250,
      responsive: {
        1200: {
          items: 4
        },
        860: {
          items: 3
        },
        576: {
          items: 2
        },
        0: {
          items: 1
        }
      }
  });

  $('.surf-stage > .owl-item:nth-child(1)').addClass('surf-selected');
  
  $('.map-slider-dots').click(function () {
      $('.map-slider-dots').removeClass('map-active-dot');
      $(this).addClass('map-active-dot');
      let dotPos = $(this).index();
      $('.surf-stage > .owl-item').removeClass('surf-selected');;
      $(`.surf-stage > .owl-item:nth-child(${dotPos})`).addClass('surf-selected');
      $('.surf-slider').trigger('to.owl.carousel', [$(this).index() - 1, 300]);
  });
  $('.surf-stage > .owl-item').click(function() {
      $('.surf-stage > .owl-item').removeClass('surf-selected');
      $(this).addClass('surf-selected');
      let cardPos = $('.surf-selected').index();
      $('.map-slider-dots').removeClass('map-active-dot');
      $(`.map-slider-dots:nth-child(${cardPos + 2})`).addClass('map-active-dot');
  }) 
  $('.surf-arrow-right').click(function() {
      $('.surf-slider').trigger('next.owl.carousel');
  });
  $('.surf-arrow-left').click(function() {
      $('.surf-slider').trigger('prev.owl.carousel');
  });
  //end of surf slider

  //travel slider
  $('#travelSlider').owlCarousel({
      mouseDrag: false,
      items: 1,
      dots: false,
      nav: false,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 250
  })
  $('.travel-prev').click(function() {
      $('#travelSlider').trigger('prev.owl.carousel');
  })
  $('.travel-next').click(function() {
      $('#travelSlider').trigger('next.owl.carousel');
  })
  // travel-slider end

  // sleep slider

  $('#sleepSlider').owlCarousel({
    mouseDrag: false,
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 250
  })
  $('.sleep-prev').click(function() {
    $('#sleepSlider').trigger('prev.owl.carousel');
  })
  $('.sleep-next').click(function() {
    $('#sleepSlider').trigger('next.owl.carousel');
  })

  //end of sleep slider

  //sleep slider quantities
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find('.quantity-btns__plus'),
      btnDown = spinner.find('.quantity-btns__minus'),
      min = input.attr('min'),
      max = input.attr('max');
      parents = $(this).parents('.book-slider__info')

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $('.quantity-button').on('click', function () {
    let parents = $(this).parents('.book-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
  });
  $('.quantity').each(function () {
    let parents = $(this).parents('.book-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() * $('.guests', parents).val();
    $('.summ', parents).html('$' + summ);
  });

  //end of sleep slide quantities
  // shop-slider
  $('#shopSlider').owlCarousel({
    mouseDrag: false,
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 250
  })
  $('.shop-prev').click(function() {
    $('#shopSlider').trigger('prev.owl.carousel');
  })
  $('.shop-next').click(function() {
    $('#shopSlider').trigger('next.owl.carousel');
  })

  // shop-buttons
  $('.shop-slider__surfboard-circle').click(function(){
    $(this).toggleClass('active')
  })
  //
  new WOW().init();

  //smoothscrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	}); 

});