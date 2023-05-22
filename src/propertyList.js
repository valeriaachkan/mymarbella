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

async function initPage() {
	spinner.start();
	let isListRendered = false;
	const searchCriteria = getSearchCriteria();

	isListRendered = await fetchProperties(searchCriteria);
	console.log(isListRendered);

	if (isListRendered) {
		spinner.stop();

		galleryContainerEl.addEventListener('click', onPropertyCardClick);

		const loadMoreBtn = document.querySelector('.loadMore__button') ?? null;
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
