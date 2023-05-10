import ResalesOnlineApi from './api-service';

const APIRequest = new ResalesOnlineApi();

export default async function fetchPropertyDetails(searchPropertyOptions) {
	const data = await APIRequest.fetchPropertyDetailsByRef(
		searchPropertyOptions
	);
	const propertyDetails = data;
	console.log(propertyDetails);

	// renderPropertyList(properties);
}
