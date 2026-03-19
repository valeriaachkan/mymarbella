module.exports = function (price) {
	const value = price ?? this?.Price;

	if (value === null || value === undefined || value === '') {
		return '';
	}

	return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
