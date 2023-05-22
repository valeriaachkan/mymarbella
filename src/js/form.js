import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';


export function customFormInit() {
	const advSearchButton = $('.adv-search-button');
	const advSearchWrapper = $('.adv-search-wrapper');
	const actionInputs = $('[name="p_agency_filterid"]');
	const actionLabels = $('.action-type>label')

	// 'checked' toggle listener for form action type (sale / rent)
	actionLabels.on('click', function(e){
		const clickedInput = e.target.previousElementSibling;

		Array.from(actionInputs).forEach(input => {
			input.removeAttribute('checked')
			clickedInput.setAttribute('checked', '')
		})
	})

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