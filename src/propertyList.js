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

	isListRendered = await fetchProperties(searchCriteria);

	if (isListRendered) {
		spinner.stop();
		galleryContainerEl.addEventListener('click', onPropertyCardClick);
		activateLoadMoreBtn();
		const sortTypeEl = document.querySelector('#sortType');
		sortTypeEl.addEventListener('change', onSortTypeClick);
	}
}

async function onSortTypeClick(e) {
	galleryContainerEl.innerHTML =
		'<div class="spinner-container" id="spinner-container"></div>';
	spinner.start();
	const selectedOption = e.target.value;
	const serializedData = JSON.stringify(selectedOption);
	sessionStorage.setItem('sortType', serializedData);

	const searchCriteria = getSearchCriteria();

	let isListRendered = false;
	isListRendered = await fetchProperties(searchCriteria, selectedOption);

	if (isListRendered) {
		spinner.stop();
		activateLoadMoreBtn();
	}
}

function getSearchCriteria() {
	try {
		const searchCriteria = JSON.parse(
			sessionStorage.getItem('propertySearchData')
		);
		const sortType = JSON.parse(sessionStorage.getItem('sortType'));

		if (sortType) {
			searchCriteria.P_SortType = sortType;
			setAttributeOnSortType(sortType);
		}

		if (searchCriteria.P_MustHaveFeatures) {
			searchCriteria.P_MustHaveFeatures = [
				'1&' + searchCriteria.P_MustHaveFeatures.join('&'),
			];
		}
		return searchCriteria;
	} catch (error) {
		console.log(error);
	}
}

function setAttributeOnSortType(sortType) {
	const sortTypeEl = document.querySelector('#sortType');

	sortTypeEl.childNodes[0].removeAttribute('selected');
	sortTypeEl.childNodes[sortType].setAttribute('selected', 'selected');
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
