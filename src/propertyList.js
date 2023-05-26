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

		try {
			const loadMoreBtn = document.querySelector('.loadMore__button') ?? null;
			loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
		} catch (error) {
			console.log(error);
		}

		const sortTypeEl = document.querySelector('#sortType');
		console.log(sortTypeEl.value);
		sortTypeEl.addEventListener('change', onSortTypeClick);
	}
}

async function onSortTypeClick(e) {
	const selectedOption = e.target.value;
	console.log(selectedOption);

	const searchCriteria = getSearchCriteria();
	searchCriteria.P_SortType = selectedOption;

	console.log(searchCriteria);
	await fetchProperties(searchCriteria);
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

export { galleryContainerEl, getSearchCriteria };
//https://booking-bff-test.up.railway.app/searchProperties?p1=1014905&p2=ca3ca58bbda23243ae3ed9e97098099d7fff44d7&p_agency_filterid=1&p_sandbox=true&p_PageSize=20&p_PageNo=1&p_output=JSON&P_Location=Altos+de+los+Monteros&P_MustHaveFeatures=%3D1%261Parking2%3D1%261Pool6%3D1
