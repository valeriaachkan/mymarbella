window.addEventListener('click', onPropertyCardClick);

function onPropertyCardClick(e) {
	if (!e.target.classList.contains('property-card')) {
		return;
	}

	const targetProperty = e.target;
	const propertyRef = targetProperty.getAttribute('data-reference');
	console.log(targetProperty, propertyRef);
	goToPropertyDeatilsPage(propertyRef);
}

function goToPropertyDeatilsPage(ref) {
	const reference = JSON.stringify(ref).replaceAll('"', '');
	console.log(reference);
	const url = `propertyDetails.html?/${reference}`;
	window.location.href = url;
}
