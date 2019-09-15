$(document).ready(function(){
	$('.js-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1850,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.js-slider2').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$('body').on('click', '.js-menu-open', function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).closest('ul').find('li:not(.icon)').hide();
		} else {
			$(this).addClass('opened');
			$(this).closest('ul').find('li:not(.icon)').show();
		}
		
		return false;
	});
	
	$('body').on('click', '.tabs-buttons .tab-link', function() {
		selectTab($(this));
		return false;
	});
	if ($('.tabs-buttons .tab-link').length) {
		selectTab($('.tabs-buttons .tab-link:eq(0)'));
	}
	function selectTab(tab) {
		var tabId = tab.attr('href').replace('#', '');
		tab.closest('.tabs-buttons').find('.tab-link').removeClass('active');
		tab.addClass('active');
		$('.tabs-content .tabs-content-one').hide();
		$('.tabs-content .tabs-content-one#' + tabId).show();
		$('.js-slider2').slick('setPosition');
	}
});
