import './styles/main.scss';
import './js/gallery-slider.js';
import ResalesOnlineApi from './js/api-service';
import {customFormInit } from './js/form.js';
import renderPropertyList from './js/render-property-list';

// const APIRequest = new ResalesOnlineApi();
const form = document.querySelector('form');

// initialization of form functions
customFormInit();
sessionStorage.clear();

// custom submit function
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {};
    formData.P_Location = $('[name="P_Location"]').val();
    formData.p_agency_filterid = $('#p_agency_filterid_2').val();
     formData.P_PropertyTypes = $('[name="P_PropertyTypes"]').val();
    formData.P_Min=$('[name="P_Min"]').val();
    formData.P_Max=$('[name="P_Max"]').val();
    formData.P_RefId=$('[name="P_RefId"]').val();
    formData.P_Beds=$('[name="P_Beds"]').val();
    formData.P_Baths=$('[name="P_Baths"]').val();
    
    
    APIRequest.fetchProperties(formData);
});

// custom submit function
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
	e.preventDefault();
	const query = setQueryParameter();
	const serializedData = JSON.stringify(query);
	console.log(serializedData);
	sessionStorage.setItem('propertySearchData', serializedData);
	window.location.href = 'propertyList.html';
}

// function setQueryParameter() {
// 	const queryParameter = {};
// 	const formProperties = form.querySelectorAll('[checked]');
// 	console.log('formProperties', formProperties);
// 	Array.from(formProperties).forEach((option) => {
// 		// if option 'checked' and started from 'form-' - this is query parameter
// 		if (
// 			option.hasAttribute('checked') &&
// 			[...option.attributes].some((attr) => attr.name.startsWith('form-'))
// 		) {
// 			console.log('option in checked and attribute:', option);
// 			const formAttr = [...option.attributes].find((attr) =>
// 				attr.name.startsWith('form-')
// 			);
// 			if (formAttr) {
// 				queryParameter[formAttr.name.substring(5)] = formAttr.value;
// 			}
// 		}
// 	});

// 	console.log('queryParameter', queryParameter);

// 	return queryParameter;
// }
