$('.tabs').each(function() {
	var ths = $(this);
	ths.find('.tabs__elem').not(':first').hide();
	ths.find('.tabs__list-item').click(function() {
		ths.find('.tabs__list-item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tabs__elem').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('active');
});

$(window).on('load', function () {
	$('.manufacture-gallery__list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
					variableWidth: true,
                }
            }
        ]
	});

	$('.history__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		variableWidth: true,
		prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66422 0.997398C10.4941 0.167534 11.8396 0.167534 12.6694 0.997398C13.4993 1.82726 13.4993 3.17274 12.6694 4.0026L7.79703 8.875H25.3335C26.5071 8.875 27.4585 9.8264 27.4585 11C27.4585 12.1736 26.5071 13.125 25.3335 13.125H7.79703L12.6694 17.9974C13.4993 18.8273 13.4993 20.1727 12.6694 21.0026C11.8396 21.8325 10.4941 21.8325 9.66422 21.0026L1.16423 12.5026C0.334362 11.6727 0.334362 10.3273 1.16423 9.4974L9.66422 0.997398Z" fill="white"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3358 0.997398C17.5059 0.167534 16.1604 0.167534 15.3306 0.997398C14.5007 1.82726 14.5007 3.17274 15.3306 4.0026L20.203 8.875H2.6665C1.4929 8.875 0.541504 9.8264 0.541504 11C0.541504 12.1736 1.4929 13.125 2.6665 13.125H20.203L15.3306 17.9974C14.5007 18.8273 14.5007 20.1727 15.3306 21.0026C16.1604 21.8325 17.5059 21.8325 18.3358 21.0026L26.8358 12.5026C27.6656 11.6727 27.6656 10.3273 26.8358 9.4974L18.3358 0.997398Z" fill="white"/></svg></button>',
        appendDots:$('.history').find('.slider-history-arrows'),
        appendArrows:$('.history').find('.slider-history-arrows'),
	});

	$('.reviews__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66422 0.997398C10.4941 0.167534 11.8396 0.167534 12.6694 0.997398C13.4993 1.82726 13.4993 3.17274 12.6694 4.0026L7.79703 8.875H25.3335C26.5071 8.875 27.4585 9.8264 27.4585 11C27.4585 12.1736 26.5071 13.125 25.3335 13.125H7.79703L12.6694 17.9974C13.4993 18.8273 13.4993 20.1727 12.6694 21.0026C11.8396 21.8325 10.4941 21.8325 9.66422 21.0026L1.16423 12.5026C0.334362 11.6727 0.334362 10.3273 1.16423 9.4974L9.66422 0.997398Z" fill="white"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3358 0.997398C17.5059 0.167534 16.1604 0.167534 15.3306 0.997398C14.5007 1.82726 14.5007 3.17274 15.3306 4.0026L20.203 8.875H2.6665C1.4929 8.875 0.541504 9.8264 0.541504 11C0.541504 12.1736 1.4929 13.125 2.6665 13.125H20.203L15.3306 17.9974C14.5007 18.8273 14.5007 20.1727 15.3306 21.0026C16.1604 21.8325 17.5059 21.8325 18.3358 21.0026L26.8358 12.5026C27.6656 11.6727 27.6656 10.3273 26.8358 9.4974L18.3358 0.997398Z" fill="white"/></svg></button>',
        appendDots:$('.reviews').find('.slider-reviews-arrows'),
        appendArrows:$('.reviews').find('.slider-reviews-arrows'),
		responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
	});
	
	$('.slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		prevArrow:'<button type="button" class="slick-prev"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 62.3333C18.3519 62.3333 5.66668 49.648 5.66668 34C5.66668 18.3519 18.3519 5.66663 34 5.66663C49.6481 5.66663 62.3333 18.3519 62.3333 34C62.3333 49.648 49.6481 62.3333 34 62.3333Z" fill="#AAAAAA"/><path d="M29.6641 23.9974C30.4939 23.1675 31.8394 23.1675 32.6693 23.9974C33.4991 24.8273 33.4991 26.1727 32.6693 27.0026L27.7969 31.875H45.3333C46.5069 31.875 47.4583 32.8264 47.4583 34C47.4583 35.1736 46.5069 36.125 45.3333 36.125H27.7969L32.6693 40.9974C33.4991 41.8273 33.4991 43.1727 32.6693 44.0026C31.8394 44.8325 30.4939 44.8325 29.6641 44.0026L21.1641 35.5026C20.3342 34.6727 20.3342 33.3273 21.1641 32.4974L29.6641 23.9974Z" fill="white"/></</button>',
		nextArrow:'<button type="button" class="slick-next"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 62.3333C49.648 62.3333 62.3333 49.648 62.3333 34C62.3333 18.3519 49.648 5.66663 34 5.66663C18.3519 5.66663 5.66663 18.3519 5.66663 34C5.66663 49.648 18.3519 62.3333 34 62.3333Z" fill="#C54126"/><path d="M38.3359 23.9974C37.506 23.1675 36.1606 23.1675 35.3307 23.9974C34.5008 24.8273 34.5008 26.1727 35.3307 27.0026L40.2031 31.875H22.6666C21.493 31.875 20.5416 32.8264 20.5416 34C20.5416 35.1736 21.493 36.125 22.6666 36.125H40.2031L35.3307 40.9974C34.5008 41.8273 34.5008 43.1727 35.3307 44.0026C36.1606 44.8325 37.506 44.8325 38.3359 44.0026L46.8359 35.5026C47.6658 34.6727 47.6658 33.3273 46.8359 32.4974L38.3359 23.9974Z" fill="white"/></</button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
	});

	$('.advantages__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		variableWidth: true,
        responsive: [
			{
			   breakpoint: 999999,
			   settings: "unslick"
			},
			{
				breakpoint: 768,
				variableWidth: true,
			 },
		 ]
	});

	$('.manufacture__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66422 0.997398C10.4941 0.167534 11.8396 0.167534 12.6694 0.997398C13.4993 1.82726 13.4993 3.17274 12.6694 4.0026L7.79703 8.875H25.3335C26.5071 8.875 27.4585 9.8264 27.4585 11C27.4585 12.1736 26.5071 13.125 25.3335 13.125H7.79703L12.6694 17.9974C13.4993 18.8273 13.4993 20.1727 12.6694 21.0026C11.8396 21.8325 10.4941 21.8325 9.66422 21.0026L1.16423 12.5026C0.334362 11.6727 0.334362 10.3273 1.16423 9.4974L9.66422 0.997398Z" fill="white"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3358 0.997398C17.5059 0.167534 16.1604 0.167534 15.3306 0.997398C14.5007 1.82726 14.5007 3.17274 15.3306 4.0026L20.203 8.875H2.6665C1.4929 8.875 0.541504 9.8264 0.541504 11C0.541504 12.1736 1.4929 13.125 2.6665 13.125H20.203L15.3306 17.9974C14.5007 18.8273 14.5007 20.1727 15.3306 21.0026C16.1604 21.8325 17.5059 21.8325 18.3358 21.0026L26.8358 12.5026C27.6656 11.6727 27.6656 10.3273 26.8358 9.4974L18.3358 0.997398Z" fill="white"/></svg></button>',
        appendDots:$('.manufacture').find('.slider-manufacture-arrows'),
        appendArrows:$('.manufacture').find('.slider-manufacture-arrows'),
		responsive: [
			{
			   breakpoint: 999999,
			   vertical: true,
			   verticalSwiping: true,
			},
			{
				breakpoint: 991,
				vertical: false
			 },
		 ]
	});

	$('.about__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
        responsive: [
			{
			   breakpoint: 999999,
			   settings: "unslick"
			},
			{
				breakpoint: 767,
			 },
		 ]
	});

	
	$('.team__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		variableWidth: true,
        responsive: [
			{
			   breakpoint: 999999,
			   settings: "unslick"
			},
			{
				breakpoint: 767,
			 },
		 ]
	});

	$('.tabs__elem.logo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
		variableWidth: true,
        responsive: [
			{
			   breakpoint: 999999,
			   settings: "unslick"
			},
			{
				breakpoint: 767,
				variableWidth: true,
			 },
		 ]
	});
});

$('.buttom__burger-menu').on('click', function(event) {
	if(!$('body').hasClass('fixed')){
		$('body').addClass('fixed');
		$('.burger-checkbox').addClass('active');
		$(this).addClass('aside-b-open');
		$('.mobile-overlay').stop().animate({left:0},350);
		$('.overlay').show();
	}else{
		$('.burger-checkbox').removeClass('active');
		$('body').removeClass('fixed');
		$(this).removeClass('aside-b-open');
		$('.mobile-overlay').stop().animate({left:-288},350);
		$('.overlay').hide();
	}
	return false;
});

 $('.mobile-overlay .close').on('click', function(event) {
		$('.burger-checkbox').removeClass('active');
		$('body').removeClass('fixed');
		$(this).removeClass('aside-b-open');
		$('.mobile-overlay').stop().animate({left:-288},350);
		$('.overlay').hide();
	return false;
});