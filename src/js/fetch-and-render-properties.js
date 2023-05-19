import ResalesOnlineApi from './api-service';
import propertyListTpl from '/src/templates/property-list.hbs';
import notFoundTpl from '/src/templates/not-found.hbs';
import { galleryContainerEl } from '../propertyList';

const APIRequest = new ResalesOnlineApi();

export default async function fetchProperties(searchOptions) {
	try {
		const data = await APIRequest.fetchProperties(searchOptions);
		const properties = data.Property;
		console.log(properties);

		if (properties.length === 0) {
			renderNotFoundPage();
			return;
		}

		renderPropertyList(properties);
	} catch (error) {
		console.log(error);
	}
}

function renderPropertyList(properties) {
	try {
		galleryContainerEl.innerHTML = propertyListTpl(properties);
	} catch (error) {
		console.log(error);
	}
}

function renderNotFoundPage() {
	try {
		galleryContainerEl.innerHTML = notFoundTpl();
	} catch (error) {
		console.log(error);
	}
}
