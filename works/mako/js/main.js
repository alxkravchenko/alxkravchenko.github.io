$(function () {
	var navBtn = $('.navbar-btn');
	var navBtnA = $('.navbar-btn-active');
	var navMenu = $('.nav-list');

	//hamburger btn behavior starts here
	navBtn.click(function () {
		navBtn.toggleClass('navbar-btn-active');
		navMenu.toggleClass('nav-list-active');
	});
	// sliders-starts
	$('.slider-1').owlCarousel({
		loop: true,
		autoPlay: 7000,
		margin: 0,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			// 400: {
			// 	items:2
			// },
			750: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	$('.slider-2').owlCarousel({
		loop: true,
		margin: 150,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$('.slider-3').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	$('.slider-4').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		asNavFor: '#slider'
	});

	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
	var owl1 = $('.slider-1');
	var owl2 = $('.slider-2');
	var owl3 = $('.slider-3');
	var owl4 = $('.slider-4');
	var owl5 = $('.slider-5');
	$('.h-carousel-next-item').click(function () {
		owl1.trigger('next.owl.carousel');
	});
	$('.h-carousel-previous-item').click(function () {
		owl1.trigger('prev.owl.carousel');
	});
	$('.e-carousel-next-item').click(function () {
		owl2.trigger('next.owl.carousel');
	});
	$('.e-carousel-previous-item').click(function () {
		owl2.trigger('prev.owl.carousel');
	});
	$('.n-carousel-next-item').click(function () {
		owl3.trigger('next.owl.carousel');
	});
	$('.n-carousel-previous-item').click(function () {
		owl3.trigger('prev.owl.carousel');
	});
	$('.p-carousel-next-item').click(function () {
		owl4.trigger('next.owl.carousel');
	});
	$('.p-carousel-previous-item').click(function () {
		owl4.trigger('prev.owl.carousel');
	});
	$('.g-carousel-next-item').click(function () {
		owl5.trigger('next.owl.carousel');
	});
	$('.g-carousel-previous-item').click(function () {
		owl5.trigger('prev.owl.carousel');
	});


	// sliders-end
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
});
