import ResalesOnlineApi from './api-service';
import SpinnerLoad from '/src/js/spinner';
import { galleryContainerEl } from '../propertyList';
import { getSearchCriteria } from '../propertyList';
import {
	renderMoreProperties,
	renderNotFoundListPage,
	renderPropertyList,
} from './rendering';

const APIRequest = new ResalesOnlineApi();
const spinner = new SpinnerLoad();

async function fetchProperties(searchOptions, sortType) {
	try {
		if (sortType) {
			console.log('sortirovka', sortType);
			APIRequest.page = 1;
			APIRequest.setSortType(sortType);
		}
		const data = await APIRequest.fetchProperties(searchOptions);
		const properties = data.Property;
		const propertyCount = data.QueryInfo.PropertyCount;
		const queryId = data.QueryInfo.QueryId;

		if (properties.length === 0) {
			renderNotFoundListPage();
			return false;
		}

		if (propertyCount > 20) {
			showGalleryOptions();
			renderPropertyList(properties);
			addLoadMoreButton(queryId);
			return true;
		}
		showGalleryOptions();
		renderPropertyList(properties);
		return true;
	} catch (error) {
		console.log(error);
	}
}

async function onLoadMoreBtnClick(e) {
	spinner.start();
	toggleClassFromSpinner();
	const loadMoreBtn = e.currentTarget;
	const queryId = loadMoreBtn.getAttribute('data-query');

	try {
		const searchCriteria = getSearchCriteria();
		const transactionType = searchCriteria.p_agency_filterid;
		console.log(searchCriteria);
		const currntPage = getCurrentPageFromSessionStorage();

		if (currntPage) {
			APIRequest.page = currntPage + 1;
		}

		const data = await APIRequest.fetchPropertiesByQueryId(
			queryId,
			transactionType
		);
		const propertyCount = data.QueryInfo.PropertyCount;
		const currentPage = data.QueryInfo.CurrentPage;
		addCurrentPageToSessionStorage(currentPage);
		const newProperties = data.Property;

		if (Math.ceil(propertyCount / 20) === currentPage) {
			hideLoadMoreButton();
		}

		spinner.stop();
		renderMoreProperties(newProperties);
		toggleClassFromSpinner();
	} catch (error) {
		console.log(error);
	}
}

function addCurrentPageToSessionStorage(page) {
	const serializedData = JSON.stringify(page);
	sessionStorage.setItem('currentPage', serializedData);
}
function getCurrentPageFromSessionStorage() {
	const currntPage = JSON.parse(sessionStorage.getItem('currentPage'));
	return currntPage;
}

function addLoadMoreButton(queryId) {
	const loadMoreBtn = `<button type="button" class="button submit-button loadMore__button" data-query=${queryId}>Load more</button><div class="spinner-container visually-hidden" id="spinner-container"></div>`;
	galleryContainerEl.insertAdjacentHTML('beforeEnd', loadMoreBtn);
}

function hideLoadMoreButton() {
	const loadMoreBtn = document.querySelector('.loadMore__button');
	loadMoreBtn.classList.add('visually-hidden');
}

function showGalleryOptions() {
	const galleryOptionsEl = document.querySelector('.gallery__options');
	galleryOptionsEl.classList.remove('visually-hidden');
}
function toggleClassFromSpinner() {
	const spinnerContainer = document.querySelector('.spinner-container');
	spinnerContainer.classList.toggle('visually-hidden');
}

export { fetchProperties, onLoadMoreBtnClick };
