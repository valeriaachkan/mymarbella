import ResalesOnlineApi from './api-service';
import propertyListTpl from '/src/templates/property-list.hbs';
import notFoundTpl from '/src/templates/not-found.hbs';
import { galleryContainerEl } from '../propertyList';

const APIRequest = new ResalesOnlineApi();

async function fetchProperties(searchOptions) {
	try {
		const data = await APIRequest.fetchProperties(searchOptions);
		const properties = data.Property;
		const propertyCount = data.QueryInfo.PropertyCount;
		const queryId = data.QueryInfo.QueryId;

		console.log(properties);

		if (properties.length === 0) {
			renderNotFoundPage();
			return;
		}

		if (propertyCount > 20) {
			renderPropertyList(properties);
			addLoadMoreButton(queryId);
			return;
		}
		renderPropertyList(properties);
	} catch (error) {
		console.log(error);
	}
}

function onLoadMoreBtnClick(e) {
	console.log(e);
	const loadMoreBtn = e.target;
	const queryId = targetProperty.getAttribute('data-query');
	console.log(loadMoreBtn);

	console.log(queryId);
}

function renderPropertyList(properties) {
	try {
		galleryContainerEl.innerHTML = propertyListTpl(properties);
	} catch (error) {
		console.log(error);
	}
}

function renderNotFoundPage() {
	try {
		galleryContainerEl.innerHTML = notFoundTpl();
	} catch (error) {
		console.log(error);
	}
}

function addLoadMoreButton(queryId) {
	const loadMoreBtn = `<button type="button" class="button submit-button loadMore__button" data-query=${queryId}>Load more</button>`;
	galleryContainerEl.insertAdjacentHTML('beforeEnd', loadMoreBtn);
}

export { fetchProperties, onLoadMoreBtnClick };
