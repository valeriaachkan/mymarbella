export default class ResalesOnlineApi {
	#p1;
	#p2;
	#baseUrl;

	constructor() {
		this.#p1 = '1014905';
		this.#p2 = '6b74333f09775d317662428da2308b9fd6df359a';
		this.#baseUrl = 'https://booking-proxy-production.up.railway.app/searchProperties';
		this.headers = {
			'Access-Control-Allow-Origin': 'https://backend.resales-online.com',
			'Content-Type': 'application/json',
		};
		this.P_Currency = 'EUR';
		this.p_PageSize = '20'; //Amount of properties returned. Default: 10. Max. value:40
		this.page = 1; //Page number of the search results to be returned. Default:1
		this.sortType = 0;
		this.p_agency_filterid = '1'; //1-Sale, 2-STRent, 3-LTRent
		// this.P_Location = ''; //Specific Location or csv list of Locations (e.g. Calahonda, Elviria)
		// this.P_MustHaveFeatures = ''; //If features are selected, affects either the sort order or the search results
		// this.searchQueryId = ''; //The unique identifier for this search (returned by the initial query). SearchProperties?P_PageSize=5&P_QueryId=11111111-aaa&P_PageNo=2. Will return the next 5 properties from the previous search
	}

	async fetchProperties(params) {
		const requestOptions = {
			method: 'GET',
			...this.headers,
		};

		const searchParams = new URLSearchParams({
			p1: this.#p1,
			p2: this.#p2,
			p_agency_filterid: '1',
			p_output: 'JSON',
			p_sandbox: true,
			p_PageSize: this.p_PageSize,
			p_PageNo: this.page,
			P_SortType: this.sortType,
			...params,
		});
		let url = `${this.#baseUrl}?${searchParams}`;
		// console.log(url);

		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();
			// console.log(data);

			this.incrementPage();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async fetchPropertyDetailsByRef(options) {
		const requestOptions = {
			method: 'GET',
			...this.headers,
		};

		const searchParams = new URLSearchParams({
			p1: this.#p1,
			p2: this.#p2,
			p_agency_filterid: '1',
			P_showallprices: true,
			p_output: 'JSON',
			...options,
		});

		const url = `${this.#baseUrl}?${searchParams}`;

		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();
			const { Property } = data;

			return Property;
		} catch (error) {
			console.log(error);
		}
	}

	async fetchPropertiesByQueryId(queryId, transactionType) {
		const requestOptions = {
			method: 'GET',
			...this.headers,
		};

		const searchParams = new URLSearchParams({
			p1: this.#p1,
			p2: this.#p2,
			p_agency_filterid: transactionType,
			p_QueryId: queryId,
			p_PageSize: this.p_PageSize,
			p_PageNo: this.page,
			p_output: 'JSON',
		});

		const url = `${this.#baseUrl}?${searchParams}`;
		// console.log(url);

		try {
			const response = await fetch(url, requestOptions);
			const data = await response.json();

			this.incrementPage();
			return data;
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

	setSortType(type) {
		return (this.sortType = type);
	}

	setLastPage(totalProp) {
		return (this.lastPage = Math.ceil(totalProp / this.p_PageSize));
	}

	get page() {
		return this.p_PageNo;
	}
	set page(num) {
		return (this.p_PageNo = num);
	}
}
