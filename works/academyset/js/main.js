$(function() {
	var navBtn = $('.navbar-btn');
	var navBtnA = $('.navbar-btn-active');
	var navMenu = $('.nav-list');

	//hamburger btn behavior starts here
	navBtn.click(function () {
		navBtn.toggleClass('navbar-btn-active');
		navMenu.toggleClass('nav-list-active');
	});
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			// 400: {
			// 	items:2
			// },
			750:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	var owl = $('.owl-carousel');
	$('.carousel-next-item').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.carousel-previous-item').click(function() {
		owl.trigger('prev.owl.carousel');
	})
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
