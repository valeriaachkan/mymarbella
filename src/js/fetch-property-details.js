import ResalesOnlineApi from './api-service';

const APIRequest = new ResalesOnlineApi();
import propertyDetTpl from '/src/templates/property-details.hbs';
import { propertyDetailsContainer } from '../propertyDetails';

export default async function fetchPropertyDetails(searchPropertyOptions) {
	const data = await APIRequest.fetchPropertyDetailsByRef(
		searchPropertyOptions
	);
	const propertyDetails = data;
	console.log(...propertyDetails);

	renderPropertyDetails(...propertyDetails);
}

function renderPropertyDetails(property) {
	console.log('hello', property);
	try {
		propertyDetailsContainer.innerHTML = propertyDetTpl(property);
	} catch (error) {
		console.log(error);
	}
}
