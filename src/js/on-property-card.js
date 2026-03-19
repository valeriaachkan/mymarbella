import { getSearchCriteria } from '/src/propertyList';

// window.addEventListener('click', onPropertyCardClick);

export default function onPropertyCardClick(e) {
	const propertyCard = e.target.closest('.property-card');
	if (!propertyCard) {
		return;
	}

	try {
		const propertyOptions = getCardOptions(propertyCard);
		goToPropertyDeatilsPage(propertyOptions);
	} catch (error) {
		console.log(error);
	}
}

function getCardOptions(propertyCard) {
	const propertyRef = propertyCard.getAttribute('data-reference');
	const searchCriteria = getSearchCriteria();
	let transactionType = '1';

	if (searchCriteria) {
		transactionType = searchCriteria.p_agency_filterid;
	}

	return { propertyRef, transactionType };
}

function goToPropertyDeatilsPage({ propertyRef, transactionType }) {
	const searchParams = new URLSearchParams({
		ref: propertyRef,
		transactionType,
	});
	const url = `propertyDetails.html?${searchParams.toString()}`;
	window.location.href = url;
}
