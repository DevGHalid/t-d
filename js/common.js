$(document).ready(function() {

	// Slider

	(function($) {
		let fadeTime = 700;


		let sliderItems = $(".professional-diagnostics__bg"),
		sliderItemsLength = sliderItems.length;


		for(let j = 0; j < sliderItemsLength; j++) {
			let getDotsSlider = $("<span></span>")
				.addClass("slider-items__dots")
				.appendTo(".slider__dots");

			$(sliderItems).eq(j).attr("id", "item-" + (j+1));
			getDotsSlider.attr("data-dots", $(sliderItems).eq(j).attr("id"));
		};


		let = sliderDots = $(".slider-items__dots");
		$(sliderDots).first().addClass("slider-items__dots_active");

		$(sliderDots).on("click", function() {
			let getIdSliderItem = $("#" + $(this).data("dots"));

			$(this).addClass("slider-items__dots_active").siblings(".slider-items__dots_active").removeClass("slider-items__dots_active");
			getIdSliderItem.fadeIn(fadeTime).siblings().fadeOut(fadeTime);
		});

	})(jQuery);

	// Slick Slider



	function isWindow() {
		// let getSliderItem = $(".are-trusted__slider");
		// if($(window).width() < 1025) {
		// 	console.log(true);
		// } else {
			$(".are-trusted__slider").slick({
				nextArrow: "<span class='sliderArrow sliderNext'></span>",
				prevArrow: "<span class='sliderArrow sliderPrev'></span>"
			});
		// }
	}

	isWindow();

	// Scroll Down

	$(".scroll-down").on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1700);
	});

	// Filter News

	$(".aside-filter__btn").on("click", function() {

		$(".aside-filter__nav").find(".aside-filter__btn").removeClass("btn_border_active");


		$(this).addClass("btn_border_active");

	});

	$(".btn_show_modal").on("click", function() {
		$(".form__modal_contacts").fadeIn(200);
		return false;
	});

	$(".close__modal").on("click", function() {
		$(".form__modal_contacts").fadeOut(200);
	});

	$(".bars").on("click", function() {
		$(".header-nav").slideToggle();
	});

});
