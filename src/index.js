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
	// console.log(formData);

	API.fetchProperties(formData);

	// goToPropertyListPage(formData);
}

function setQueryParameters() {
	const formData = {};
	const P_Location = $('[name="P_Location"]');
	const P_Agency = $('[name=p_agency_filterid]');
	const P_PropertyTypes = $('[name="P_PropertyTypes"]');
	const P_Min =  $('[name="P_Min"]');
	const P_Max =  $('[name="P_Max"]');
	const P_RefId = $('[name="P_RefId"]');
	const P_Beds = $('[name="P_Beds"]');
	const P_Baths = $('[name="P_Baths"]');


	if (P_Location.val().toString() !== ''){
		formData.P_Location = P_Location.val();
	}

	Array.from(P_Agency).forEach(agency => {
		if(agency.checked){
			formData.P_Agency = agency.value;
		}
	})

	
	if (P_PropertyTypes.val().toString() !== ''){
		formData.P_PropertyTypes = P_PropertyTypes.val();
	}

	if (P_Min.val().toString() !== ''){
		formData.P_Min = P_Min.val();
	}

	if (P_Max.val().toString() !== ''){
		formData.P_Max = P_Max.val();
	}

	if (P_RefId.val().toString() !== ''){
		formData.P_RefId =P_RefId.val();
	}

	if (P_Beds.val().toString() !== ''){
		formData.P_Beds = P_Beds.val();
	}

	if (P_Baths.val().toString() !== ''){
		formData.P_Baths = P_Baths.val();
	}

	return formData;
}

function goToPropertyListPage(query) {
	const serializedData = JSON.stringify(query);
	sessionStorage.setItem('propertySearchData', serializedData);
	window.location.href = 'propertyList.html';
}
