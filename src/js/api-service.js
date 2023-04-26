// import axios from 'axios';


export default class ResalesOnlineApi {
	#p1;
	#p2;
	#baseUrl;

	constructor() {
		this.#p1 = '1014905';
		this.#p2 = 'e599237279274f635942f36d155c226f2cc1f131';
		this.#baseUrl = 'https://webapi.resales-online.com/V6/SearchProperties';
		// this.headers = {
		// 	'Access-Control-Allow-Origin': 'https://backend.resales-online.com',
		// 	'Content-Type': 'application/json',
		// };
		// this.P_Currency = 'EUR';
		this.p_PageSize = '20'; //Amount of properties returned. Default: 10. Max. value:40
		this.page = 1; //Page number of the search results to be returned. Default:1
		// this.p_agency_filterid = '1'; //1-Sale, 2-STRent, 3-LTRent
		// this.P_Location = ''; //Specific Location or csv list of Locations (e.g. Calahonda, Elviria)
		// this.P_PropertyTypes = '2-3,2-4'; //List of one or more Option Values
		// this.P_Max = '';
		// this.P_Min = '';
		// this.P_MustHaveFeatures = ''; //If features are selected, affects either the sort order or the search results
		this.searchQueryId = ''; //The unique identifier for this search (returned by the initial query). SearchProperties?P_PageSize=5&P_QueryId=11111111-aaa&P_PageNo=2. Will return the next 5 properties from the previous search
	}

	async fetchProperties(params) {
		const requestOptions = {
			method: 'GET',
			// redirect: 'follow',
			// mode: 'no-cors',
			...this.headers,
		};
		const searchParams = new URLSearchParams({
			p1: this.#p1,
			p2: this.#p2,
			headers: this.headers,
			p_sandbox: true,
			p_PageSize: this.p_PageSize,
			p_PageNo: this.page,
			p_output: 'JSON',
			...params,
		});

		const url = `${this.#baseUrl}?${searchParams}`;

		// const response = await axios.get(url, {
		// 	mode: 'no-cors',
		// });

		// console.log(response);

		try {
			const response = await fetch(url, requestOptions);
			// const data = await response.json();
			console.log(response);
			this.incrementPage();
		} catch (error) {
			console.log(error);
		}
	}

	incrementPage() {
		this.page += 1;
	}

	resetPage() {
		this.page = 1;
	}
}
