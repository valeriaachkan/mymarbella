import './styles/propertyDetails.scss';
// import './js/property-photo-slider';
import fetchPropertyDetails from './js/fetch-property-details';
import { getSearchCriteria } from './propertyList';

function initPage() {
	const propertyOptions = formSearchPropertyOptions();
	console.log(propertyOptions);
	fetchPropertyDetails(propertyOptions);
	import('./js/property-photo-slider')
		.then((module) => {
			// Module has been successfully loaded
			// You can use the module here
			module();
		})
		.catch((error) => {
			// An error occurred while loading the module
			console.error('Error loading module:', error);
		});
}

if (document.querySelector('.propertyDetails-page')) {
	initPage();
}

const propertyDetailsContainer = document.querySelector('.property-info');

function getPropertyOptions() {
	const queryString = window.location.search;
	const options = queryString.split('=')[1].split('-');

	return options;
}

function formSearchPropertyOptions() {
	const [ref, transactionType] = getPropertyOptions();
	const searchPropertyParams = {
		P_RefId: ref,
		p_agency_filterid: transactionType,
	};
	return searchPropertyParams;
}

export { propertyDetailsContainer };
