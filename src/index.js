import $ from 'jquery';
import './styles/main.scss';
import ResalesOnlineApi from './js/api-service';
import customForm from './js/form.js';
const fff = new ResalesOnlineApi();
// initialization of form functions
customForm();

const form = document.querySelector('form');

// custom submit function
form.addEventListener('submit', function (e) {
    e.preventDefault();

    setqueryParameter();
});

function setqueryParameter(){
    const queryParameter = [];
    const formProperties =form.querySelectorAll('[checked]');
    console.log(formProperties);
    Array.from(formProperties).forEach(option=>{
        // if option 'checked' and started from 'form-' - this is query parameter
        if (option.checked && [...option.attributes].some(attr => attr.name.startsWith('form-'))){
            const formAttr = [...option.attributes].find(attr => attr.name.startsWith('form-'));
            if (formAttr) {
                console.log(formAttr)
                queryParameter.push(formAttr);
                //! remove form-
              }
            
        }
    })

    console.log(queryParameter)

    return queryParameter;
}

const data = fff.fetchProperties({
	p_agency_filterid: '3',
	p_PageSize: '20',
	P_Location: 'Benalmadena',
	P_PropertyTypes: '1-1',
	P_Min: '6000',
});
