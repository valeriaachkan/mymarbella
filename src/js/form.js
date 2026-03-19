import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';

window.$ = $;
window.jQuery = $;

if ($.fn.selectpicker?.Constructor) {
	$.fn.selectpicker.Constructor.BootstrapVersion = '4';
}

export function customFormInit() {
	const advSearchButton = $('.adv-search-button');
	const advSearchWrapper = $('.adv-search-wrapper');
	const actionInputs = $('[name="p_agency_filterid"]');
	const actionLabels = $('.action-type>label');

	// 'checked' toggle listener for form action type (sale / rent)
	actionLabels.on('click', function (e) {
		const clickedInput = $(e.target).prev();
		const clickedLabel = $(e.target);

		Array.from(actionInputs).forEach((input) => {
			$(input).next().removeClass('clicked-label');
			$(input).prop('checked', false).removeAttr('checked');
		});

		clickedInput.prop('checked', true).attr('checked', 'checked');
		clickedLabel.addClass('clicked-label');
	});

	initializeSelectpickers();

	// toggle advanced search function
	advSearchButton.on('click', function (e) {
		advSearchWrapper.toggleClass('is-open');
		advSearchWrapper.slideToggle(300);
	});
}

function initializeSelectpickers() {
	const selectElements = document.querySelectorAll('select.selectpicker');

	selectElements.forEach((selectElement) => {
		while (selectElement.parentElement?.classList.contains('bootstrap-select')) {
			selectElement.parentElement.replaceWith(selectElement);
		}
	});

	if (selectElements.length > 0) {
		$(selectElements).selectpicker();
	}
}
