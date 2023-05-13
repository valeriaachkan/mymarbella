import './styles/propertyList.scss';
import fetchProperties from './js/fetch-and-render-properties';
import './js/on-property-card';
// import ResalesOnlineApi from './js/api-service';
// import propertyList from '/src/templates/property-list.hbs';

const galleryEl = document.querySelector('.gallery_container');

function initPage() {
	// const APIRequest = new ResalesOnlineApi();

	const searchCriteria = getSearchCriteria();

	fetchProperties(searchCriteria);
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

export { galleryEl, getSearchCriteria };
