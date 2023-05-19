import './styles/propertyList.scss';
import SpinnerLoad from './js/spinner';
import fetchProperties from './js/fetch-and-render-properties';
// import './js/on-property-card';
import onPropertyCardClick from './js/on-property-card';

const spinner = new SpinnerLoad();
const galleryContainerEl = document.querySelector('.gallery_container');

function initPage() {
	spinner.start();
	const searchCriteria = getSearchCriteria();

	fetchProperties(searchCriteria);
	if (document.querySelector('.property-list')) {
		spinner.stop();

		const propertyCardEl = document.querySelector('.property-card');

		galleryContainerEl.addEventListener('click', onPropertyCardClick);
		propertyCardEl.addEventListener('touch', onPropertyCardClick);
		// import('./js/on-property-card');
	}
}

if (document.querySelector('.propertyList-page')) {
	initPage();
}

function getSearchCriteria() {
	const searchCriteria = JSON.parse(
		sessionStorage.getItem('propertySearchData')
	);
	// console.log(searchCriteria);
	return searchCriteria;
}

export { galleryContainerEl, getSearchCriteria };
