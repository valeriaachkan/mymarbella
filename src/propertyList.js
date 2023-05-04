import './styles/propertyList.scss';
import propertyList from '/src/templates/property-list.hbs';

const galleryEl = document.querySelector('.gallery_container');

export { galleryEl };

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const dataString = urlParams.get('data');
// const data = JSON.parse(decodeURIComponent(dataString));
// renderPropertyList(data);

const properties = window.localStorage.getItem('properties');
console.log(properties);
renderPropertyList(properties);

function renderPropertyList(properties) {
	try {
		galleryEl.innerHTML = propertyList(properties);
	} catch (error) {
		console.log(error);
	}
	console.log('hello');
}
