import { getSearchCriteria } from '/src/propertyList';

// if (document.querySelector('.property-list')) {
// console.log('first');
// console.log(propertyCardEl);
console.log('privet');
window.addEventListener('click', onPropertyCardClick);
// window.addEventListener('touch', onPropertyCardClick);
// }

export default function onPropertyCardClick(e) {
	console.log(e.target);
	const propertyCardEl = document.querySelector('.property-card');
	if (!e.target.classList.contains('property-card')) {
		return;
	}
	console.log('first1');
	const targetProperty = e.target;
	const propertyRef = targetProperty.getAttribute('data-reference');
	console.log(targetProperty, propertyRef);

	const transactionType = getSearchCriteria().p_agency_filterid;
	console.log(transactionType);

	const propertyOptions = propertyRef + '-' + transactionType;
	console.log(propertyOptions);

	goToPropertyDeatilsPage(propertyOptions);
	// propertyCardEl.innerHTML = 'hello';
}

function goToPropertyDeatilsPage(ref) {
	const reference = JSON.stringify(ref).replaceAll('"', '');
	console.log(reference);
	const url = `propertyDetails.html?/ref=${reference}`;
	window.location.href = url;
}
