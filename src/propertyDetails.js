import './styles/propertyDetails.scss';
import SpinnerLoad from './js/spinner';
import fetchPropertyDetails from './js/fetch-property-details';

const spinner = new SpinnerLoad();

function initPage() {
	spinner.start();
	const propertyOptions = formSearchPropertyOptions();

	if (!propertyOptions) {
		spinner.stop();
		return;
	}

	fetchPropertyDetails(propertyOptions).finally(() => {
		spinner.stop();
	});
}

if (document.querySelector('.propertyDetails-page')) {
	initPage();
}

const propertyDetailsContainer = document.querySelector('.property-info');

function getPropertyOptions() {
	const searchParams = new URLSearchParams(window.location.search);

	return {
		ref: searchParams.get('ref') || '',
		transactionType: searchParams.get('transactionType') || '1',
	};
}

function formSearchPropertyOptions() {
	const { ref, transactionType } = getPropertyOptions();
	if (!ref) {
		return null;
	}

	const searchPropertyParams = {
		P_RefId: ref,
		p_agency_filterid: transactionType,
	};
	return searchPropertyParams;
}

export { propertyDetailsContainer };
