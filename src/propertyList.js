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

		const loadMoreBtn = document.querySelector('.loadMore__button') ?? null;
		loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
	}
}

function getSearchCriteria() {
	const searchCriteria = JSON.parse(
		sessionStorage.getItem('propertySearchData')
	);
	return searchCriteria;
}

export { galleryContainerEl, getSearchCriteria };
