import './styles/main.scss';
import './js/gallery-slider.js';
import ResalesOnlineApi from './js/api-service';
import { customFormInit } from './js/form.js';
import renderPropertyList from './js/render-property-list';

const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);

// initialization of form functions
customFormInit();
sessionStorage.clear();

function onFormSubmit(e) {
	e.preventDefault();
	const formData = setQueryParameters();
	// console.log(formData);

	goToPropertyListPage(formData);
}

function setQueryParameters() {
	const formData = {};
	formData.P_Location = $('[name="P_Location"]').val();
	formData.p_agency_filterid = $('#p_agency_filterid_2').val();
	formData.P_PropertyTypes = $('[name="P_PropertyTypes"]').val();
	formData.P_Min = $('[name="P_Min"]').val();
	formData.P_Max = $('[name="P_Max"]').val();
	formData.P_RefId = $('[name="P_RefId"]').val();
	formData.P_Beds = $('[name="P_Beds"]').val();
	formData.P_Baths = $('[name="P_Baths"]').val();

	return formData;
}

function goToPropertyListPage(query) {
	const serializedData = JSON.stringify(query);
	// console.log(serializedData);
	sessionStorage.setItem('propertySearchData', serializedData);
	window.location.href = 'propertyList.html';
}
