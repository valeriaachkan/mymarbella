import $, { type } from 'jquery';
import './styles/main.scss';
import ResalesOnlineApi from './js/api-service';
import customForm from './js/form.js';

const APIRequest = new ResalesOnlineApi();
const form = document.querySelector('form');

// initialization of form functions
customForm();

// custom submit function
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const query = setQueryParameter();

    APIRequest.fetchProperties(...query, {P_Location:'Alicante'});
});

function setQueryParameter(){
    const queryParameter = [];
    const formProperties =form.querySelectorAll('[checked]');
    console.log('formProperties', formProperties);
    Array.from(formProperties).forEach(option=>{
        // if option 'checked' and started from 'form-' - this is query parameter
        if (option.hasAttribute('checked') && [...option.attributes].some(attr => attr.name.startsWith('form-'))){
            console.log('option in checked and attribute:',option)
            const formAttr = [...option.attributes].find(attr => attr.name.startsWith('form-'));
            if (formAttr) {
                // push query parameter name and value to array 'query parameter'
                const formattedQuery = `{"${formAttr.name.substring(5)}":"${formAttr.value}"}`;
                queryParameter.push(JSON.parse(formattedQuery));
            }
        }
    })

    console.log('queryParameter', queryParameter)

    return queryParameter;
}

// const data = APIRequest.fetchProperties({
// 	p_agency_filterid: '3',
// 	p_PageSize: '20',
// 	P_Location: 'Benalmadena',
// 	P_PropertyTypes: '1-1',
// 	P_Min: '6000',
// });
