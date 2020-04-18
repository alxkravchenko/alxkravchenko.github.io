$(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
	});
	var owl = $('.owl-carousel');
	$('.carousel-next-item').click(function() {
		owl.trigger('next.owl.carousel');
	})
	$('.carousel-prev-item').click(function() {
		owl.trigger('prev.owl.carousel');
	})
	var navBtn = $('.navbar-btn');
	var navBtnA = $('.navbar-btn-active');
	var navMenu = $('.nav-list');

	//hamburger btn behavior starts here
	navBtn.click(function () {
		navBtn.toggleClass('navbar-btn-active');
		navMenu.toggleClass('nav-list-active');
	});
});
