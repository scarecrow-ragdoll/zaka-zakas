import Swiper from 'swiper/bundle';
import noUiSlider from 'nouislider';

$(document).ready(function () {

	$('.burger').click(function () {
		$(this).toggleClass('is-active');
		$('.header-menu-mob').toggle();
		$('body,html').toggleClass('overflow');
		$('.header').toggleClass('new-bg');
	})

	$('.nav-link').click(function () {
		$(".nav-link.active").removeClass('active');
		$(this).addClass('active');
	});

	$('.lang').click(function () {
		var th = $(this);
		$(this).toggleClass('active');

		$(document).mouseup(function (e) {
			var div = th;
			if (!div.is(e.target)
				&& div.has(e.target).length === 0) {
				div.removeClass('active');
			}
		});
	});

	$('.js-init-select').select2();

	if ( $(window).width() > 662 ) {
		$('.header-popup-link').mouseenter(function () {
			$('.header-popup-item').hide();
			$(this).find('.header-popup-item').show();
		});

		$('.header-popup-item').mouseleave(function () {
			$(this).hide();
		});

		$('.header-popup-link').mouseleave(function () {
			$('.header-popup-item').hide();
		});
	}

	if ($('.js-curtain').length > 0) {
		$('.js-curtain').click(function () {
			$(this).next().slideToggle();
			$(this).closest('.instruction-item').toggleClass('active');
		});
	}

	if ( $(window).width() < 661 ) {
		$('.js-open-cat').click(function() {
			$('.header-popup-mob').addClass('show');
		});

		$('.header-popup-link').click(function() {
			if ($(this).children('.header-popup-item').hasClass('show')) {
				$('.header-popup-item').removeClass('show');
			} else {
				$(this).children('.header-popup-item').addClass('show');
			}
		});

		$('.js-open-cat').click(function() {
			$('.header').addClass('cat-open');
		});
	
		$('.cat-close').click(function() {
			$('.header').removeClass('cat-open')
		});
	}

	$('.cat-close').click(function() {
		$('.header-popup-mob').removeClass('show');
	});

	$('.sort-links a').click(function (event) {
		event.preventDefault();
		$('.sort-links .active').removeClass('active');
		$(this).addClass('active');
	});

	var sliderRecomend = new Swiper(".recommend-slider", {
		slidesPerView: 5.5,
		spaceBetween: 38,
		loop: true,
		pagination: {
			el: ".recommend-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-recommend-next",
			prevEl: ".swiper-recommend-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 4,
				spaceBetween: 16,
				direction: 'vertical',
				pagination: {
					el: ".swiper-pagination",
				},
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 12
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 25,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 38
			},
		}
	});

	if ($('.filter-price').length > 0) {
		var keypressSlider = document.querySelector(".filter-price");
		var input0 = document.querySelector(".input-with-keypress-0");
		var input1 = document.querySelector(".input-with-keypress-1");
		var inputs = [input0, input1];
		var value1 = Number($(".input-with-keypress-0").val());
		var value2 = Number($(".input-with-keypress-1").val());

		noUiSlider.create(keypressSlider, {
			start: [value1, value2],
			connect: true,
			step: 1,
			range: {
				min: [value1],
				max: [value2]
			},
			format: {
				from: function (value) {
					return parseInt(value);
				},
				to: function (value) {
					return parseInt(value);
				}
			}
		});

		keypressSlider.noUiSlider.on("update", function (values, handle) {
			inputs[handle].value = values[handle];

			function setSliderHandle(i, value) {
				var r = [null, null];
				r[i] = value;
				keypressSlider.noUiSlider.set(r);
			}

			inputs.forEach(function (input, handle) {
				input.addEventListener("change", function () {
					setSliderHandle(handle, this.value);
				});

				input.addEventListener("keydown", function (e) {
					var values = keypressSlider.noUiSlider.get();
					var value = Number(values[handle]);

					var steps = keypressSlider.noUiSlider.steps();

					var step = steps[handle];

					var position;

					// 13 is enter,
					// 38 is key up,
					// 40 is key down.
					switch (e.which) {
						case 13:
							setSliderHandle(handle, this.value);
							break;

						case 38:
							// Get step to go increase slider value (up)
							position = step[1];

							// false = no step is set
							if (position === false) {
								position = 1;
							}

							// null = edge of slider
							if (position !== null) {
								setSliderHandle(handle, value + position);
							}

							break;

						case 40:
							position = step[0];

							if (position === false) {
								position = 1;
							}

							if (position !== null) {
								setSliderHandle(handle, value - position);
							}

							break;
					}
				});
			});
		});
	}

	$('.form-input[type="checkbox"]').click(function () {
		if ($(this).is(':checked')) {
			$(this).closest('.form-label').addClass('checked');
			console.log('checked');
		} else {
			$(this).closest('.form-label').removeClass('checked');
			console.log('not-checked');
		}
	});

	$('.pagination-link').click(function (e) {
		e.preventDefault();
		$('.pagination-link.active').removeClass('active');
		$(this).addClass('active');
	});

	if($('.filter-mob').length > 0) {
		$('.filter-mob').click(function() {
			$(this).toggleClass('active');
		});
	}

	$('.close-filter').click(function(event) {
		event.preventDefault();
		$('.filter-mob.active').removeClass('active');
	});

	$(document).on('mouseup', function(e) {
		let s = $('.filter-content');
		if(!s.is(e.target) && s.has(e.target).length === 0) {
			$('.filter-mob.active').removeClass('active');
		}
	});

	$(".scroll-to").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	var btn = $('.btn-to-top');

	$(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.btn-to-top').addClass('show');
        } else {
            $('.btn-to-top').removeClass('show');
        }
    });

    $('.btn-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

	$('.filter-item').click(function() {
		$('.filter-item.active').removeClass('active');
		$(this).addClass('active');
	});
});