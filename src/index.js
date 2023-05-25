import './styles/main.scss';
import './js/gallery-slider.js';
import ResalesOnlineApi from './js/api-service';
import { customFormInit } from './js/form.js';

const API = new ResalesOnlineApi();
const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);

// initialization of form functions
customFormInit();
sessionStorage.clear();

function onFormSubmit(e) {
	e.preventDefault();
	const formData = setQueryParameters();

	goToPropertyListPage(formData);
}

function setQueryParameters() {
	const formData = {};
	const P_Location = $('[name="P_Location"]');
	const p_agency_filterid = $('[name=p_agency_filterid]');
	const P_PropertyTypes = $('[name="P_PropertyTypes"]');
	const P_PropertyFeatures = $('[name="P_PropertyFeatures"]');
	const P_Min = $('[name="P_Min"]');
	const P_Max = $('[name="P_Max"]');
	const P_RefId = $('[name="P_RefId"]');
	const P_Beds = $('[name="P_Beds"]');
	const P_Baths = $('[name="P_Baths"]');

	if (P_Location.val().includes('all-regions')) {
		// if input value is all regions
		formData.P_Location = '';
	} else if (
		P_Location.val().toString() !== '' &&
		!P_Location.val().includes('all-regions')
	) {
		// if input value is not empty and not all regions
		formData.P_Location = P_Location.val();
	}

	Array.from(p_agency_filterid).forEach((agency) => {
<<<<<<< Updated upstream
		if (agency.checked) {
			formData.p_agency_filterid = agency.value;
=======
		if ($(agency).attr('checked')) {
			formData.p_agency_filterid = $(agency).val();
>>>>>>> Stashed changes
		}
	});

	if (P_PropertyTypes.val().toString() !== '') {
		formData.P_PropertyTypes = P_PropertyTypes.val();
	}

	if (P_PropertyFeatures.val().toString() !== '') {
		formData.P_MustHaveFeatures = P_PropertyFeatures.val();
	}

	if (P_Min.val().toString() !== '') {
		formData.P_Min = P_Min.val();
	}

	if (P_Max.val().toString() !== '') {
		formData.P_Max = P_Max.val();
	}

	if (P_RefId.val().toString() !== '') {
		formData.P_RefId = P_RefId.val();
	}

	if (P_Beds.val().toString() !== '') {
		formData.P_Beds = P_Beds.val();
	}

	if (P_Baths.val().toString() !== '') {
		formData.P_Baths = P_Baths.val();
	}

	return formData;
}

function goToPropertyListPage(query) {
	const serializedData = JSON.stringify(query);
	sessionStorage.setItem('propertySearchData', serializedData);
	window.location.href = 'propertyList.html';
}

// handlebars function
// function greaterThanZero(value) {
// 	if (value > 0) {
// 		return value;
// 	} else return false;
// }
