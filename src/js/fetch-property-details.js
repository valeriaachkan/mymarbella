import ResalesOnlineApi from './api-service';
import { renderPropertyDetails, renderNotFoundDetailsPage } from './rendering';

const APIRequest = new ResalesOnlineApi();

export default async function fetchPropertyDetails(searchPropertyOptions) {
	try {
		const propertyDetails = await APIRequest.fetchPropertyDetailsByRef(
			searchPropertyOptions
		);

		if (
			!propertyDetails ||
			(Array.isArray(propertyDetails) && propertyDetails.length === 0) ||
			(!Array.isArray(propertyDetails) &&
				Object.keys(propertyDetails).length === 0)
		) {
			renderNotFoundDetailsPage();
			return false;
		}

		const normalizedProperty = Array.isArray(propertyDetails)
			? propertyDetails[0]
			: propertyDetails;
		renderPropertyDetails(normalizedProperty);
		return true;
	} catch (error) {
		console.log(error);
		renderNotFoundDetailsPage();
		return false;
	}
}
