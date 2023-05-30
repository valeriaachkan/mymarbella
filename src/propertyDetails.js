import './styles/propertyDetails.scss';
import SpinnerLoad from './js/spinner';
import fetchPropertyDetails from './js/fetch-property-details';

const spinner = new SpinnerLoad();

function initPage() {
	spinner.start();
	const propertyOptions = formSearchPropertyOptions();

	fetchPropertyDetails(propertyOptions);
	if (document.querySelector('.property-details__container')) {
		spinner.stop();
	}
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
