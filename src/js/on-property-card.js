import { getSearchCriteria } from '/src/propertyList';

window.addEventListener('click', onPropertyCardClick);

function onPropertyCardClick(e) {
	if (!e.target.classList.contains('property-card')) {
		return;
	}

	const targetProperty = e.target;
	const propertyRef = targetProperty.getAttribute('data-reference');
	console.log(targetProperty, propertyRef);

	const transactionType = getSearchCriteria().p_agency_filterid;
	console.log(transactionType);

	const propertyOptions = propertyRef + '-' + transactionType;
	console.log(propertyOptions);

	goToPropertyDeatilsPage(propertyOptions);
}

function goToPropertyDeatilsPage(ref) {
	const reference = JSON.stringify(ref).replaceAll('"', '');
	console.log(reference);
	const url = `propertyDetails.html?/ref=${reference}`;
	window.location.href = url;
}
