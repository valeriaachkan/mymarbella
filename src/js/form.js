import $ from 'jquery';

const form = document.querySelector('form');

export function customFormInit() {
	const form = document.querySelector('form');
	const detailsElementsArray = $('details');
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
		Array.from(detailsElementsArray).forEach((targetDetail) => {
			$(document).on('click tap touchstart', function (e) {
				// listener for open or close
				if (targetDetail && !targetDetail.contains(e.target)) {
					targetDetail.removeAttribute('open');
				}
			});
			// update <summary>
			$(targetDetail).on('click tap touchstart', (e) => {
				updateSummary(e.currentTarget);
			});
		});
	}

	function updateSummary(targetElement) {
		const options = $('input[type=checkbox]');
		console.log(options)

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

export function setQueryParameter(){
    const queryParameter = [];
    const formProperties =form.querySelectorAll('[checked]');
    console.log('formProperties', formProperties);
    Array.from(formProperties).forEach(option=>{
        // if option 'checked' and started from 'form-' - this is query parameter
        if (option.hasAttribute('checked') && [...option.attributes].some(attr => attr.name.startsWith('form-'))){
            console.log('option in checked and attribute:',option)
            const formAttr = [...option.attributes].find(attr => attr.name.startsWith('form-'));
            if (formAttr) {
                // push query parameter name and value to array 'query parameter'
                const formattedQuery = `{"${formAttr.name.substring(5)}":"${formAttr.value}"}`;
                queryParameter.push(JSON.parse(formattedQuery));
            }
        }
    })

    console.log('queryParameter', queryParameter)

    return queryParameter;
}