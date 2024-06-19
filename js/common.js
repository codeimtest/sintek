$(window).on('load', function() { // makes sure the whole site is loaded 
	$(".phone").mask("+7(999) 999-9999");
	$('body').css('overflow','visible');
	$('#preloader').delay(1200).fadeOut('slow'); // will fade out the white DIV that covers the website. 
})

var swiper = new Swiper(".first_screen_slider", {
	slidesPerView: 1,
	watchOverflow: true,
	loop: true,
	watchSlidesProgress: true,
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	autoplay: {
    delay: 4000,
  },
});

// Header toggle
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var header = $('header');

	if (scroll >= 300) {
		header.addClass('active');
	} else {
		header.removeClass('active');
	}
});

//header menu
$('.menu_button').click(function(){
	$(this).toggleClass('active')
	$('body').toggleClass('lock')
	$('aside').toggleClass('active')
	$('header').toggleClass('toggled_color')
})
$('.aside_menu a').click(function(){
	$('body').removeClass('lock')
	$('aside').removeClass('active')
	$('header').removeClass('toggled_color')
	$('.menu_button').removeClass('active')
})

//current link
$('header nav ul li a').click(function(){
	$('header nav ul li').removeClass('current')
	$(this).parent().addClass('current')
})