export const SITE_URL = 'https://zirka.agency';

export function propertyUrl(reference, transactionType = '1') {
	const type = ['1', '2', '3'].includes(String(transactionType))
		? String(transactionType)
		: '1';
	const params = new URLSearchParams({ ref: String(reference), transactionType: type });
	return `propertyDetails.html?${params}`;
}

export function propertyMetadata(property, transactionType = '1') {
	const type = property.PropertyType?.NameType || 'Property';
	const location = property.Location || property.Area || property.Province || 'Costa del Sol';
	const action = { '1': 'for sale', '2': 'for short-term rent', '3': 'for long-term rent' }[transactionType] || 'for sale';
	const reference = property.Reference ? ` · ${property.Reference}` : '';
	const heading = `${type} ${action} in ${location}`;
	return {
		heading,
		title: `${heading}${reference} | Zirka Real Estate`,
		description: `View photographs and details of this ${type.toLowerCase()} ${action} in ${location}${property.Reference ? ` (reference ${property.Reference})` : ''}. Contact Zirka Real Estate to discuss this property.`,
		url: `${SITE_URL}/${propertyUrl(property.Reference, transactionType)}`,
	};
}

export function updatePropertyMetadata(property, transactionType) {
	const metadata = propertyMetadata(property, transactionType);
	document.title = metadata.title;
	const setMeta = (attribute, name, content) => {
		let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
		if (!element) {
			element = document.createElement('meta');
			element.setAttribute(attribute, name);
			document.head.append(element);
		}
		element.content = content;
	};
	setMeta('name', 'description', metadata.description);
	setMeta('property', 'og:title', metadata.title);
	setMeta('property', 'og:description', metadata.description);
	setMeta('property', 'og:url', metadata.url);
	setMeta('name', 'twitter:title', metadata.title);
	setMeta('name', 'twitter:description', metadata.description);
	let canonical = document.head.querySelector('link[rel="canonical"]');
	if (!canonical) {
		canonical = document.createElement('link');
		canonical.rel = 'canonical';
		document.head.append(canonical);
	}
	canonical.href = metadata.url;
	return metadata;
}
