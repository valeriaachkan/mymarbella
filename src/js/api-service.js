export default class ResalesOnlineApi {
	#p1;
	#p2;
	#baseUrl;
	#paths;

	constructor() {
		this.#p1 = '1014905';
		this.#p2 = '7aca62e1865fac01c51e32fc7cc014850eb76716';
		this.#baseUrl = 'https://booking-proxy-fly-io.fly.dev';
		this.#paths = {
			searchProperties: '/searchProperties',
			propertyDetails: '/propertyDetails',
		};
		this.headers = {
			Accept: 'application/json',
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
		try {
			const searchParams = this.#buildSearchParams(params, {
				p_sandbox: true,
				p_PageSize: this.p_PageSize,
				p_PageNo: this.page,
				P_SortType: this.sortType,
			});
			const data = await this.#request(this.#paths.searchProperties, searchParams);

			this.incrementPage();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async fetchPropertyDetailsByRef(options) {
		try {
			const searchParams = this.#buildSearchParams(options, {
				P_showallprices: true,
			});
			const data = await this.#request(this.#paths.propertyDetails, searchParams);
			const { Property } = data;

			return Property;
		} catch (error) {
			console.log(error);
		}
	}

	async fetchPropertiesByQueryId(queryId, transactionType) {
		try {
			const searchParams = this.#buildSearchParams(
				{
					p_agency_filterid: transactionType,
					P_QueryId: queryId,
				},
				{
					p_PageSize: this.p_PageSize,
					p_PageNo: this.page,
				}
			);
			const data = await this.#request(this.#paths.searchProperties, searchParams);

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

	#buildSearchParams(params = {}, defaults = {}) {
		const normalizedParams = { ...(params || {}) };
		const selectedFeatures = normalizedParams.P_MustHaveFeatures;
		delete normalizedParams.P_MustHaveFeatures;

		const searchParams = new URLSearchParams({
			p1: this.#p1,
			p2: this.#p2,
			p_agency_filterid: this.p_agency_filterid,
			p_output: 'JSON',
			...defaults,
			...normalizedParams,
		});

		this.#appendFeatureParams(searchParams, selectedFeatures);
		return searchParams;
	}

	#appendFeatureParams(searchParams, selectedFeatures) {
		if (!selectedFeatures) {
			return;
		}

		const featureTokens = this.#normalizeFeatureTokens(selectedFeatures);
		if (featureTokens.length === 0) {
			return;
		}

		if (!searchParams.get('P_MustHaveFeatures')) {
			searchParams.set('P_MustHaveFeatures', '1');
		}

		featureTokens.forEach((token) => {
			const [rawKey, rawValue] = token.split('=');
			const key = rawKey?.trim();
			const value = rawValue?.trim() || '1';

			if (!key) {
				return;
			}

			searchParams.append(key, value);
		});
	}

	#normalizeFeatureTokens(selectedFeatures) {
		const rawFeatureItems = Array.isArray(selectedFeatures)
			? selectedFeatures
			: [selectedFeatures];

		return rawFeatureItems
			.flatMap((item) => String(item).split(','))
			.map((item) => item.trim())
			.filter(Boolean);
	}

	async #request(path, searchParams) {
		const url = new URL(`${this.#baseUrl}${path}`);
		url.search = searchParams.toString();

		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 20000);

		try {
			const response = await fetch(url.toString(), {
				method: 'GET',
				headers: this.headers,
				signal: controller.signal,
			});
			return await response.json();
		} finally {
			clearTimeout(timeoutId);
		}
	}
}
