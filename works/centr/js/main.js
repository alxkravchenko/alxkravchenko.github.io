$(function () {
	$('.header-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$('.news-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	var owl = $('.header-slider');
	$('.header-slider-right').click(function () {
		owl.trigger('next.owl.carousel');
	});
	$('.header-slider-left').click(function () {
		owl.trigger('prev.owl.carousel');
	});


	$(function () {
		$("#accordion").accordion();
	});
	$(function () {
		$("#accordion-1").accordion();
	});
	$('.lk-btn').click(function () {
		$('.accord-2').toggleClass('accord-2-active');
	});

	$('#calendar').datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	});

	var navBtn = $('.navbar-btn');
	var navMenu = $('.nav-list');
	//hamburger btn behavior starts here
	navBtn.click(function () {
		navBtn.toggleClass('navbar-btn-active');
		navMenu.toggleClass('nav-list-active');
	});

	// tabs
	//news-tabs
	$('.r-tab-item').not(':first').hide();
	$('.recent .r-tab').click(function () {
		$('.recent .r-tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.r-tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	//projects-tabs
	$('.p-tab-item').not(':first').hide();
	$('.projects .p-tab').click(function () {
		$('.projects .p-tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.p-tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');


	//sticky-navbar
	var stickyNavTop = $('.nav').offset().top;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var stickyNav = function () {
		var scrollTop = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > stickyNavTop) {
			$('.nav').addClass('sticky');
		} else {
			$('.nav').removeClass('sticky');
		}
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function () {
		stickyNav();
	});

	//smoothscrolling
	$(function() {
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
	});
});
