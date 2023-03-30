import './styles/main.scss';

import locs from '../locs.json';

// function to show submitted multiple selects
const result = document.querySelector('.result');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	const formData = new FormData(form);
	console.log(JSON.stringify(formData.getAll('select')));

	result.innerText = JSON.stringify(formData.getAll('select'), null, 2);
	e.preventDefault();
});

// function to close details on click elsewhere
const detailsElementsArray = document.querySelectorAll('details');
console.log(detailsElementsArray);
if (detailsElementsArray.length > 0) {
	detailsElementsArray.forEach((targetDetail) => {
		targetDetail.addEventListener('click', function (e) {
			// not working
			if (e.target.closest('details')) {
				return;
			}
			console.log('not closest');
			targetDetail.removeAttribute('open');
		});
	});
}

// const locations = locs.location;
// console.log(locations);

// const locationSelect = locations
// 	.map(
// 		(location) =>
// 			`<label>
//             ${location}
//             <input class="checkbox" type="checkbox" value='${location
// 							.toLowerCase()
// 							.split(' ')
// 							.join('-')}' />
//                 </label>`
// 	)
// 	.join('');
// console.log(locationSelect);
