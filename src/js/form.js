import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';
const form = document.querySelector('form');

export function customFormInit() {
	const advSearchButton = $('.adv-search-button');
	const advSearchWrapper = $('.adv-search-wrapper');

	$(document).ready(function(){
		$('.selectpicker').selectpicker();
		$('.btn.dropdown-toggle.btn-default.bs-placeholder').hide();
		$('.btn.dropdown-toggle.btn-default').hide();
	})

	// toggle advanced search function
	advSearchButton.on('click', function (e) {
		advSearchWrapper.toggleClass('is-open');
		advSearchWrapper.slideToggle(300);
	});

}