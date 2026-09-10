import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.gallery').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	variableWidth: true,
	arrows: false,
});

const $featuredMain = $('.featured-property__main');
if ($featuredMain.find('.featured-property__cover').length > 1) {
	$featuredMain.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		arrows: false,
	});
}

const $featuredThumbs = $('.featured-property__thumbs');
const $featuredCover = $featuredMain.find('.featured-property__cover');

$featuredThumbs.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	variableWidth: true,
	arrows: true,
	responsive: [
		{
			breakpoint: 768,
			settings: { slidesToShow: 2 },
		},
	],
});

// Only meaningful while the main slide is a single static image (see the
// slick check above); if more cover images are added, this should be
// replaced with slick's asNavFor to properly sync two sliders.
if ($featuredCover.length === 1) {
	$featuredThumbs.on('click', '.featured-property__thumb', function () {
		const src = this.getAttribute('src');
		const alt = this.getAttribute('alt');
		$featuredCover.attr({ src, alt });
		$featuredThumbs
			.find('.featured-property__thumb')
			.removeClass('featured-property__thumb--active');
		$featuredThumbs
			.find(`.featured-property__thumb[src="${src}"]`)
			.addClass('featured-property__thumb--active');
	});
}
