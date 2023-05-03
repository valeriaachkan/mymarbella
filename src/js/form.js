import $ from 'jquery';

export default function customForm() {
	const form = document.querySelector('form');
	const detailsElementsArray = document.querySelectorAll('details');
	const advSearchButton = $('.adv-search-button');
	const advSearchWrapper = $('.adv-search-wrapper');
	const actionInputs = $('[name="p_agency_filterid"]');
	console.log(actionInputs)

	// toggle advanced search function
	advSearchButton.on('click', function (e) {
		advSearchWrapper.toggleClass('is-open');
		advSearchWrapper.slideToggle(300);
	});

	// 'checked' toggle listener for form action type (sale / rent)
	actionInputs.on('click', function(e){
		const clickedInput = e.target;
		Array.from(actionInputs).forEach(input => input.removeAttribute('checked'))
		clickedInput.setAttribute('checked', '')
	})


	// listener for custom select elements
	if (detailsElementsArray.length > 0) {
		detailsElementsArray.forEach((targetDetail) => {
			document.addEventListener('click', function (e) {
				// listener for open or close
				if (targetDetail && !targetDetail.contains(e.target)) {
					targetDetail.removeAttribute('open');
				}
			});
			// update <summary>
			targetDetail.addEventListener('click', (e) => {
				updateSummary(e.currentTarget);
			});
		});
	}

	function updateSummary(targetElement) {
		const options = targetElement.querySelectorAll('input[type=checkbox]');

		const selectedValues = Array.from(options)
			.filter((option) => option.checked)
			.map((option) => option.nextElementSibling)
			.map((option) => option.setAttribute('checked' , ''))
		const selectedValuesText = Array.from(options)
			.filter((option) => option.checked)
			.map((option) => option.nextElementSibling.textContent)
			.join(', ');

		if (selectedValues.length === 0) {
			targetElement.querySelector('summary').textContent = 'Nothing selected';
		} else if (selectedValues.length <= 2) {
			targetElement.querySelector('summary').textContent = selectedValuesText;
		} else {
			targetElement.querySelector(
				'summary'
			).textContent = `Selected ${selectedValues.length} locations`;
		}
	}
}
