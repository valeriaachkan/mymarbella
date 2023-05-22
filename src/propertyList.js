import './styles/propertyList.scss';
import SpinnerLoad from './js/spinner';
import {
	fetchProperties,
	onLoadMoreBtnClick,
} from './js/fetch-and-render-properties';
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
		console.log('first');

		const propertyCardEl = document.querySelector('.property-card');

		galleryContainerEl.addEventListener('click', onPropertyCardClick);
		propertyCardEl.addEventListener('touch', onPropertyCardClick);

		const loadMoreBtn = document.querySelector('.loadMore__button');
		console.log('here', loadMoreBtn);

		loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
	}

	// if (document.querySelector('.loadMore__button')) {
	// 	const loadMoreBtn = document.querySelector('.loadMore__button');
	// 	console.log(loadMoreBtn);

	// 	loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
	// }
}

if (document.querySelector('.propertyList-page')) {
	initPage();
}

// function

function getSearchCriteria() {
	const searchCriteria = JSON.parse(
		sessionStorage.getItem('propertySearchData')
	);
	// console.log(searchCriteria);
	return searchCriteria;
}

export { galleryContainerEl, getSearchCriteria };
