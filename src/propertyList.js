import './styles/propertyList.scss';
import fetchProperties from './js/fetch-and-render-properties';
import './js/property-details';
// import ResalesOnlineApi from './js/api-service';
// import propertyList from '/src/templates/property-list.hbs';

const galleryEl = document.querySelector('.gallery_container');

// const APIRequest = new ResalesOnlineApi();

const searchCriteria = JSON.parse(sessionStorage.getItem('propertySearchData'));
console.log(searchCriteria);

fetchProperties(searchCriteria);

export { galleryEl };
