import ResalesOnlineApi from './api-service';
import { renderPropertyDetails, renderNotFoundDetailsPage } from './rendering';

const APIRequest = new ResalesOnlineApi();

export default async function fetchPropertyDetails(searchPropertyOptions) {
	try {
		const data = await APIRequest.fetchPropertyDetailsByRef(
			searchPropertyOptions
		);
		const propertyDetails = data;

		if (propertyDetails.length === 0) {
			renderNotFoundDetailsPage();
			return;
		}

		renderPropertyDetails(...propertyDetails);
	} catch (error) {
		console.log(error);
	}
}
