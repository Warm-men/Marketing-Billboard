$(function() {
				var _scroll = {
					delay: 1000,
					easing: 'linear',
					items: 1,
					duration: 0.04,
					timeoutDuration: 0,
					// pauseOnHover: 'immediate'
				};
				$('#ticker').carouFredSel({
					width: 1000,
					align: false,
					items: {
						width: 'variable',
						height: 30,
						visible: 1
					},
					scroll: _scroll
				});
				$('.caroufredsel_wrapper').css('width', '100%');
});
