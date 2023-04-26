import './styles/main.scss';
// import ResalesOnlineApi from './js/api-service';
import customForm from './js/customForm.js';

// initialization of form functions
customForm();

// const fff = new ResalesOnlineApi();
// const data = fff.fetchProperties({
// 	// p_agency_filterid: '1',
// 	// p_PageSize: '20',
// 	// P_Location: 'Benalmadena',
// 	// P_PropertyTypes: '1-1',
// 	// P_Min: '6000',
// });

function getData(url){
	return fetch(url,{
		method: 'GET',
		p1: '1014905',
		p2: 'e599237279274f635942f36d155c226f2cc1f131',
		p_agency_filterid: '1'
	})
	.then(response => response.json())
	.catch(error => console.error(error));
}

getData('https://localhost:3000/')
.then(data => {
	console.log(data)
}).catch(error => console.log(error))
// 