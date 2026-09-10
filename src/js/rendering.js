import propertyDetTpl from '/src/templates/property-details.hbs';
import notFoundDetailsPage from '/src/templates/404.hbs';
import { propertyUrl, updatePropertyMetadata } from './property-seo.mjs';
import propertyListTpl from '/src/templates/property-list.hbs';
import morePropertiesTpl from '/src/templates/more-properties.hbs';
import notFoundListPage from '/src/templates/not-found.hbs';

function withPropertyLinks(properties, transactionType) {
	return properties.map((property) => ({ ...property, detailUrl: propertyUrl(property.Reference, transactionType) }));
}

//Property list render
function renderPropertyList(properties, transactionType = '1') {
	const galleryContainerEl = document.querySelector('.gallery_container');
	try {
		galleryContainerEl.innerHTML = propertyListTpl(withPropertyLinks(properties, transactionType));
	} catch (error) {
		console.log(error);
	}
}

function renderMoreProperties(properties, transactionType = '1') {
	const propertyList = document.querySelector('.property-list');
	try {
		propertyList.insertAdjacentHTML('beforeend', morePropertiesTpl(withPropertyLinks(properties, transactionType)));
	} catch (error) {
		console.log(error);
	}
}

function renderNotFoundListPage() {
	const galleryContainerEl = document.querySelector('.gallery_container');
	try {
		galleryContainerEl.innerHTML = notFoundListPage();
	} catch (error) {
		console.log(error);
	}
}

//Property details render
function renderPropertyDetails(property) {
	const propertyDetailsContainer = document.querySelector('.property-info');
	const searchQueryId = JSON.parse(sessionStorage.getItem('searchQueryId'));
	property.searchQueryId = searchQueryId;
	// console.log(property);
	try {
		const transactionType = new URLSearchParams(window.location.search).get('transactionType') || '1';
		const metadata = updatePropertyMetadata(property, transactionType);
		propertyDetailsContainer.innerHTML = propertyDetTpl({ ...property, seoHeading: metadata.heading });
		importSlickSlider();
	} catch (error) {
		console.log(error);
	}
}

function importSlickSlider() {
	import('/src/js/property-photo-slider.js');
}

function renderNotFoundDetailsPage() {
	const propertyDetailsContainer = document.querySelector('.property-info');
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
