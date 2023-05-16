import ResalesOnlineApi from './api-service';
import propertyListTpl from '/src/templates/property-list.hbs';
import { galleryEl } from '../propertyList';

const APIRequest = new ResalesOnlineApi();

export default async function fetchProperties(searchOptions) {
	const data = await APIRequest.fetchProperties(searchOptions);
	const properties = data.Property;
	console.log(properties);

	renderPropertyList(properties);
}

function renderPropertyList(properties) {
	console.log(properties);
	try {
		galleryEl.innerHTML = propertyListTpl(properties);
	} catch (error) {
		console.log(error);
	}
}
