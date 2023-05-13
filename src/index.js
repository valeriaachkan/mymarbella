import $, { type } from 'jquery';
import './styles/main.scss';
import './js/gallery-slider.js';
import ResalesOnlineApi from './js/api-service';
import {customFormInit , setQueryParameter} from './js/form.js';
import renderPropertyList from './js/render-property-list';

// const APIRequest = new ResalesOnlineApi();
const form = document.querySelector('form');

// initialization of form functions
customFormInit();

// custom submit function
form.addEventListener('submit', onFormSubmit);

sessionStorage.clear();

function onFormSubmit(e) {
	e.preventDefault();
	const query = setQueryParameter();
	const serializedData = JSON.stringify(query);
	console.log(serializedData);
	sessionStorage.setItem('propertySearchData', serializedData);
	window.location.href = 'propertyList.html';
}


// const data = APIRequest.fetchProperties({
// 	p_agency_filterid: '3',
// 	p_PageSize: '20',
// 	P_Location: 'Benalmadena',
// 	P_PropertyTypes: '1-1',
// 	P_Min: '6000',
// });
