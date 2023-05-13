import $, { type } from 'jquery';
import './styles/main.scss';
import ResalesOnlineApi from './js/api-service';
import {customFormInit , setQueryParameter} from './js/form.js';

const APIRequest = new ResalesOnlineApi();
const form = document.querySelector('form');

// initialization of form functions
customFormInit();

// custom submit function
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const query = setQueryParameter();

    APIRequest.fetchProperties(...query, {P_Location:'Alicante'});
});



// const data = APIRequest.fetchProperties({
// 	p_agency_filterid: '3',
// 	p_PageSize: '20',
// 	P_Location: 'Benalmadena',
// 	P_PropertyTypes: '1-1',
// 	P_Min: '6000',
// });
