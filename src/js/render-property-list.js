import propertyList from '/src/templates/property-list.hbs';
import { galleryEl } from '/src/propertyList';

export default function renderPropertyList(properties) {
	galleryEl.innerHTML = propertyList(properties);
	console.log('hello');
}
