import propertyDetTpl from '/src/templates/property-details.hbs';
import notFoundDetailsPage from '/src/templates/404.hbs';
import { galleryContainerEl } from '../propertyList.js';
import { propertyDetailsContainer } from '../propertyDetails';
import propertyListTpl from '/src/templates/property-list.hbs';
import morePropertiesTpl from '/src/templates/more-properties.hbs';
import notFoundListPage from '/src/templates/not-found.hbs';

//Property list render
function renderPropertyList(properties) {
	try {
		galleryContainerEl.innerHTML = propertyListTpl(properties);
	} catch (error) {
		console.log(error);
	}
}

function renderMoreProperties(properties) {
	const propertyList = document.querySelector('.property-list');
	try {
		propertyList.insertAdjacentHTML('beforeend', morePropertiesTpl(properties));
	} catch (error) {
		console.log(error);
	}
}

function renderNotFoundListPage() {
	try {
		galleryContainerEl.innerHTML = notFoundListPage();
	} catch (error) {
		console.log(error);
	}
}

//Property details render
function renderPropertyDetails(property) {
	console.log(property);
	try {
		propertyDetailsContainer.innerHTML = propertyDetTpl(property);
		importSlickSlider();
	} catch (error) {
		console.log(error);
	}
}

function importSlickSlider() {
	import('/src/js/property-photo-slider.js');
}

function renderNotFoundDetailsPage() {
	try {
		propertyDetailsContainer.innerHTML = notFoundDetailsPage();
	} catch (error) {
		console.log(error);
	}
}
export {
	renderPropertyDetails,
	renderNotFoundDetailsPage,
	renderMoreProperties,
	renderNotFoundListPage,
	renderPropertyList,
};
