import './styles/propertyList.scss';
import SpinnerLoad from './js/spinner';
import { fetchProperties, onLoadMoreBtnClick } from './js/fetch-property-list';
import onPropertyCardClick from './js/on-property-card';

const spinner = new SpinnerLoad();
const galleryContainerEl = document.querySelector('.gallery_container');

if (document.querySelector('.propertyList-page')) {
	initPage();
}

async function initPage() {
	spinner.start();
	let isListRendered = false;
	const searchCriteria = getSearchCriteria();
	// console.log(searchCriteria);

	isListRendered = await fetchProperties(searchCriteria);

	if (isListRendered) {
		spinner.stop();
		galleryContainerEl.addEventListener('click', onPropertyCardClick);

		// try {
		// 	const loadMoreBtn = document.querySelector('.loadMore__button') ?? null;
		// 	loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
		// } catch (error) {
		// 	console.log(error);
		// }

		const sortTypeEl = document.querySelector('#sortType');
		console.log(sortTypeEl.value);
		sortTypeEl.addEventListener('change', onSortTypeClick);
	}
	// if (document.querySelector('.loadMore__button')) {
	// 	console.log('btn is here');
	// 	const loadMoreBtn = document.querySelector('.loadMore__button');
	// 	loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
	// }
}

async function onSortTypeClick(e) {
	galleryContainerEl.innerHTML =
		'<div class="spinner-container" id="spinner-container"></div>';
	spinner.start();
	const selectedOption = e.target.value;
	console.log(selectedOption);

	const searchCriteria = getSearchCriteria();
	// searchCriteria.P_SortType = selectedOption;

	console.log('query', searchCriteria);

	let isListRendered = false;
	isListRendered = await fetchProperties(searchCriteria, selectedOption);

	if (isListRendered) {
		spinner.stop();
		activateLoadMoreBtn();
	}
}

function getSearchCriteria() {
	const searchCriteria = JSON.parse(
		sessionStorage.getItem('propertySearchData')
	);

	if (searchCriteria.P_MustHaveFeatures) {
		searchCriteria.P_MustHaveFeatures = [
			'=1&' + searchCriteria.P_MustHaveFeatures.join('&'),
		];
	}
	// console.log(searchCriteria);
	return searchCriteria;
}

function activateLoadMoreBtn() {
	try {
		const loadMoreBtn = document.querySelector('.loadMore__button');
		loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
	} catch (error) {
		console.log(error);
	}
}
export { galleryContainerEl, getSearchCriteria };
