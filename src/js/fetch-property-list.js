import ResalesOnlineApi from './api-service';
import SpinnerLoad from '/src/js/spinner';
import { galleryContainerEl } from '../propertyList';
import {
	renderMoreProperties,
	renderNotFoundListPage,
	renderPropertyList,
} from './rendering';

const APIRequest = new ResalesOnlineApi();
const spinner = new SpinnerLoad();

async function fetchProperties(searchOptions) {
	try {
		const data = await APIRequest.fetchProperties(searchOptions);
		const properties = data.Property;
		const propertyCount = data.QueryInfo.PropertyCount;
		const queryId = data.QueryInfo.QueryId;

		console.log(properties);

		if (properties.length === 0) {
			renderNotFoundListPage();
			return false;
		}

		if (propertyCount > 20) {
			renderPropertyList(properties);
			addLoadMoreButton(queryId);
			return true;
		}
		renderPropertyList(properties);
		return true;
	} catch (error) {
		console.log(error);
	}
}

async function onLoadMoreBtnClick(e) {
	console.log(e);
	spinner.start();
	toggleClassFromSpinner();
	const loadMoreBtn = e.currentTarget;
	const queryId = loadMoreBtn.getAttribute('data-query');

	try {
		const data = await APIRequest.fetchPropertiesByQueryId(queryId);
		const newProperties = data.Property;
		// console.log(newProperties);

		spinner.stop();
		renderMoreProperties(newProperties);
		toggleClassFromSpinner();
	} catch (error) {
		console.log(error);
	}
}

function addLoadMoreButton(queryId) {
	const loadMoreBtn = `<button type="button" class="button submit-button loadMore__button" data-query=${queryId}>Load more</button><div class="spinner-container visually-hidden" id="spinner-container"></div>`;
	galleryContainerEl.insertAdjacentHTML('beforeEnd', loadMoreBtn);
}

function toggleClassFromSpinner() {
	const spinnerContainer = document.querySelector('.spinner-container');
	spinnerContainer.classList.toggle('visually-hidden');
}

export { fetchProperties, onLoadMoreBtnClick };
