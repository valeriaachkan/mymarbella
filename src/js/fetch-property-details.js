import ResalesOnlineApi from './api-service';
import propertyDetTpl from '/src/templates/property-details.hbs';
import notFoundPageTpl from '/src/templates/404.hbs';
import { propertyDetailsContainer } from '../propertyDetails';

const APIRequest = new ResalesOnlineApi();

export default async function fetchPropertyDetails(searchPropertyOptions) {
	try {
		const data = await APIRequest.fetchPropertyDetailsByRef(
			searchPropertyOptions
		);
		const propertyDetails = data;

		if (propertyDetails.length === 0) {
			renderNotFoundPage();
			return;
		}

		renderPropertyDetails(...propertyDetails);
	} catch (error) {
		console.log(error);
	}
}

function renderPropertyDetails(property) {
	console.log('hello', property);
	try {
		propertyDetailsContainer.innerHTML = propertyDetTpl(property);
		importSlickSlider();
	} catch (error) {
		console.log(error);
	}
}
function renderNotFoundPage() {
	try {
		propertyDetailsContainer.innerHTML = notFoundPageTpl();
	} catch (error) {
		console.log(error);
	}
}

function importSlickSlider() {
	import('/src/js/property-photo-slider.js');
}
