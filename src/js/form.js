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
		const clickedInput = $(e.target).prev();
		const clickedLabel = $(e.target);
			console.log({clickedInput})

		Array.from(actionInputs).forEach(input => {
			console.log($(input).next());
			$(input).next().removeClass('clicked-label')
			$(input).removeAttr('checked')
			
			clickedInput.attr('checked', 'true');
			clickedLabel.addClass('clicked-label');
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