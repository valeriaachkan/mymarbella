import { getSearchCriteria } from '/src/propertyList';

// window.addEventListener('click', onPropertyCardClick);

export default function onPropertyCardClick(e) {
	if (!e.target.classList.contains('property-card')) {
		return;
	}

	try {
		const propertyOptions = getCardOptions(e);
		goToPropertyDeatilsPage(propertyOptions);
	} catch (error) {
		console.log(error);
	}
}

function getCardOptions(e) {
	const targetProperty = e.target;
	const propertyRef = targetProperty.getAttribute('data-reference');
	const searchCriteria = getSearchCriteria();
	let transactionType = '1';

	if (searchCriteria) {
		transactionType = getSearchCriteria().p_agency_filterid;
	}

	const propertyOptions = propertyRef + '-' + transactionType;
	return propertyOptions;
}

function goToPropertyDeatilsPage(ref) {
	const reference = JSON.stringify(ref).replaceAll('"', '');
	const url = `propertyDetails.html?/ref=${reference}`;
	window.location.href = url;
}
