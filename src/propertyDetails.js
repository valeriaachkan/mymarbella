import './styles/propertyDetails.scss';
import fetchPropertyDetails from './js/fetch-property-details';
import { getSearchCriteria } from './propertyList';

function initPage() {
	const propertyOptions = formSearchPropertyOptions();
	console.log(propertyOptions);
	fetchPropertyDetails(propertyOptions);
}

if (document.querySelector('.propertyDetails-page')) {
	initPage();
}

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
