import './styles/main.scss';
import ResalesOnlineApi from './js/api-service';
import {customFormInit } from './js/form.js';

const APIRequest = new ResalesOnlineApi();
const form = document.querySelector('form');

// initialization of form functions
customFormInit();

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
