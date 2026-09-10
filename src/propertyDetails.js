import './styles/propertyDetails.scss';
import SpinnerLoad from './js/spinner';
import fetchPropertyDetails from './js/fetch-property-details';
import { renderNotFoundDetailsPage } from './js/rendering';

const spinner = new SpinnerLoad();

function initPage() {
	spinner.start();
	const propertyOptions = formSearchPropertyOptions();

	if (!propertyOptions) {
		document.title = 'Property not specified | Zirka Real Estate';
		const robots = document.createElement('meta');
		robots.name = 'robots';
		robots.content = 'noindex, follow';
		document.head.append(robots);
		renderNotFoundDetailsPage();
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
