// import ResalesOnlineApi from './api-service';

// const API = new ResalesOnlineApi();

// const el = [
// 	''<option class="level-0" value="6806">Marbella East/Este</option>',',
// 	''<option class="level-1" value="6824">Altos de los Monteros</option>',',
// 	''<option class="level-1" value="6823">Artola</option>',',
// 	''<option class="level-1" value="6822">Bahía de Marbella</option>',',
// 	''<option class="level-1" value="6821">Cabopino</option>',',
// 	''<option class="level-1" value="6820">Carib Playa</option>',',
// 	''<option class="level-1" value="6819">Costabella</option>',',
// 	''<option class="level-1" value="6818">El Rosario</option>',',
// 	''<option class="level-1" value="6817">Elviria</option>',',
// 	''<option class="level-1" value="6816">Hacienda Las Chapas</option>',',
// 	''<option class="level-1" value="6815">La Mairena</option>',',
// 	''<option class="level-1" value="6814">Las Chapas</option>',',
// 	''<option class="level-1" value="6813">Los Monteros</option>',',
// 	''<option class="level-1" value="6812">Marbesa</option>',',
// 	''<option class="level-1" value="6811">Puerto de Cabopino</option>',',
// 	''<option class="level-1" value="6810">Reserva de Marbella</option>',',
// 	''<option class="level-1" value="6809">Río Real</option>',',
// 	''<option class="level-1" value="6808">Santa Clara</option>',',
// 	''<option class="level-1" value="6807">Torre Real</option>',',
// 	''<option class="level-0" value="6895">Marbella Central/Centro</option>',',
// 	''<option class="level-1" value="6899">Marbella</option>',',
// 	''<option class="level-1" value="6898">Nagüeles</option>',',
// 	''<option class="level-1" value="6897">Sierra Blanca</option>',',
// 	''<option class="level-1" value="6896">The Golden Mile</option>',',
// 	''<option class="level-0" value="6785">Marbella West/Oeste</option>',',
// 	''<option class="level-1" value="6795">Aloha</option>',',
// 	''<option class="level-1" value="6794">Cortijo Blanco</option>',',
// 	''<option class="level-1" value="6793">Guadalmina Alta</option>',',
// 	''<option class="level-1" value="6792">Guadalmina Baja</option>',',
// 	''<option class="level-1" value="6791">La Campana</option>',',
// 	''<option class="level-1" value="6790">Las Brisas</option>',',
// 	''<option class="level-1" value="6789">Nueva Andalucía</option>',',
// 	''<option class="level-1" value="6788">Puerto Banús</option>',',
// 	''<option class="level-1" value="6787">San Pedro de Alcántara</option>',',
// 	''<option class="level-1" value="6786">Valle del Sol</option>',',
// 	''<option class="level-0" value="6842">Benahavís</option>',',
// 	''<option class="level-1" value="6844">Los Arqueros</option>',',
// 	''<option class="level-1" value="6843">Monte Halcones</option>',',
// 	''<option class="level-1" value="6850">Benahavís</option>',',
// 	''<option class="level-1" value="6849">El Madroñal</option>',',
// 	''<option class="level-1" value="6848">La Heredia</option>',',
// 	''<option class="level-1" value="6847">La Quinta</option>',',
// 	''<option class="level-1" value="6846">La Zagaleta</option>',',
// 	''<option class="level-1" value="6845">Los Almendros</option>',',
// 	''<option class="level-0" value="6825">Estepona</option>',',
// 	''<option class="level-1" value="6841">Atalaya</option>',',
// 	''<option class="level-1" value="6840">Bel Air</option>',',
// 	''<option class="level-1" value="6839">Benamara</option>',',
// 	''<option class="level-1" value="6838">Benavista</option>',',
// 	''<option class="level-1" value="6837">Cancelada</option>',',
// 	''<option class="level-1" value="6836">Costalita</option>',',
// 	''<option class="level-1" value="6835">Diana Park</option>',',
// 	''<option class="level-1" value="6834">El Padron</option>',',
// 	''<option class="level-1" value="6833">El Paraiso</option>',',
// 	''<option class="level-1" value="6832">El Presidente</option>',',
// 	''<option class="level-1" value="6831">Estepona</option>',',
// 	''<option class="level-1" value="6830">Hacienda del Sol</option>',',
// 	''<option class="level-1" value="6829">Los Flamingos</option>',',
// 	''<option class="level-1" value="6828">New Golden Mile</option>',',
// 	''<option class="level-1" value="6827">Selwo</option>',',
// 	''<option class="level-1" value="6826">Valle Romano</option>',',
// 	''<option class="level-0" value="6871">Casares</option>',',
// 	''<option class="level-1" value="6875">Casares</option>',',
// 	''<option class="level-1" value="6874">Casares Playa</option>',',
// 	''<option class="level-1" value="6873">Casares Pueblo</option>',',
// 	''<option class="level-1" value="6872">Doña Julia</option>',',
// 	''<option class="level-0" value="6889">Manilva / Duquesa</option>',',
// 	''<option class="level-1" value="6891">San Diego</option>',',
// 	''<option class="level-1" value="6890">San Luis de Sabinillas</option>',',
// 	''<option class="level-1" value="6894">La Duquesa</option>',',
// 	''<option class="level-1" value="6893">Manilva</option>',',
// 	''<option class="level-1" value="6892">Punta Chullera</option>',',
// 	''<option class="level-0" value="6876">Sotogrande</option>',',
// 	''<option class="level-1" value="6888">Guadiaro</option>',',
// 	''<option class="level-1" value="6887">La Alcaidesa</option>',',
// 	''<option class="level-1" value="6886">Pueblo Nuevo de Guadiaro</option>',',
// 	''<option class="level-1" value="6885">San Enrique</option>',',
// 	''<option class="level-1" value="6884">San Martín de Tesorillo</option>',',
// 	''<option class="level-1" value="6883">Sotogrande</option>',',
// 	''<option class="level-1" value="6882">Sotogrande Alto</option>',',
// 	''<option class="level-1" value="6881">Sotogrande Costa</option>',',
// 	''<option class="level-1" value="6880">Sotogrande Marina</option>',',
// 	''<option class="level-1" value="6879">Sotogrande Playa</option>',',
// 	''<option class="level-1" value="6878">Sotogrande Puerto</option>',',
// 	''<option class="level-1" value="6877">Torreguadiaro</option>',',
// 	''<option class="level-0" value="6851">Mijas / Mijas Costa</option>',',
// 	''<option class="level-1" value="6870">Calahonda</option>',',
// 	''<option class="level-1" value="6869">Calanova Golf</option>',',
// 	''<option class="level-1" value="6868">Calypso</option>',',
// 	''<option class="level-1" value="6867">Campo Mijas</option>',',
// 	''<option class="level-1" value="6866">Cerros del Aguila</option>',',
// 	''<option class="level-1" value="6865">El Chaparral</option>',',
// 	''<option class="level-1" value="6864">El Faro</option>',',
// 	''<option class="level-1" value="6863">La Cala</option>',',
// 	''<option class="level-1" value="6862">La Cala de Mijas</option>',',
// 	''<option class="level-1" value="6861">La Cala Golf</option>',',
// 	''<option class="level-1" value="6860">La Cala Hills</option>',',
// 	''<option class="level-1" value="6859">Mijas</option>',',
// 	''<option class="level-1" value="6858">Mijas Costa</option>',',
// 	''<option class="level-1" value="6857">Mijas Golf</option>',',
// 	''<option class="level-1" value="6856">Miraflores</option>',',
// 	''<option class="level-1" value="6855">Riviera del Sol</option>',',
// 	''<option class="level-1" value="6854">Sierrezuela</option>',',
// 	''<option class="level-1" value="6853">Torrenueva</option>',',
// 	''<option class="level-1" value="6852">Valtocado</option>',',
// 	''<option class="level-0" value="6796">Sierra de las Nieves</option>',',
// 	''<option class="level-1" value="6805">Alozaina</option>',',
// 	''<option class="level-1" value="6804">Casarabonela</option>',',
// 	''<option class="level-1" value="6803">El Burgo</option>',',
// 	''<option class="level-1" value="6802">Guaro</option>',',
// 	''<option class="level-1" value="6801">Istán</option>',',
// 	''<option class="level-1" value="6800">Monda</option>',',
// 	''<option class="level-1" value="6799">Ojén</option>',',
// 	''<option class="level-1" value="6798">Tolox</option>',',
// 	''<option class="level-1" value="6797">Yunquera</option>',',
// ];

// function makeInputs(arr) {
// 	const newArr = [];
// 	arr.forEach((el) => {
// 		const loc = el.slice(37).replace('</option>',', '');
// 		const val = el.slice(24, 36);
// 		// console.log(loc, val);
// 		const ready = el.replace(val, `value="${loc}"`);
// 		console.log(ready);
// 		newArr.push(ready);
// 	});
// 	return newArr.join('');
// }

// console.log(makeInputs(el));

const features = [
	'<option value="1Category1">Bargain</option>',
	'<option value="1Setting1, 1Category2">Beachfront</option>',
	'<option value="1Category7">Investment</option>',
	'<option value="1Category8">Luxury</option>',
	'<option value="1Features25">Barbeque</option>',
	'<option value="1Features20">Disabled Access</option>',
	'<option value="1Parking2">Garage</option>',
	'<option value="1Garden2">Garden</option>',
	'<option value="1Features14">Guest Apartment</option>',
	'<option value="1Features15">Guest House</option>',
	'<option value="1Features9">Gym</option>',
	'<option value="1Features23">Jacuzzi</option>',
	'<option value="1Pool6">Childrens Pool</option>',
	'<option value="1Pool1">Communal Pool</option>',
	'<option value="1Pool4">Heated Pool</option>',
	'<option value="1Pool2">Private Pool</option>',
	'<option value="1Features2">Lift</option>',
	'<option value="1Features4">Near Transport</option>',
	'<option value="1Features5">Private Terrace</option>',
	'<option value="1Views1">Sea Views</option>',
	'<option value="1Views2">Mountain Views</option>',
	'<option value="1Views8">Garden Views</option>',
	'<option value="1Views9">Pool Views</option>',
	'<option value="1Features35">Staff Accommodation</option>',
	'<option value="1Setting18">Close To Forest</option>',
	'<option value="1Setting11">Close To Golf</option>',
	'<option value="1Setting14">Close To Sea</option>',
	'<option value="1Setting13">Close To Shops</option>',
	'<option value="1Setting15">Close To Town</option>',
	'<option value="1Setting6">Commercial Area</option>',
	'<option value="1Setting10">Mountain Pueblo</option>',
	'<option value="1Setting4">Suburban</option>',
	'<option value="1Features13">Tennis Court</option>',
	'<option value="1Setting3">Town</option>',
	'<option value="1Setting9">Village</option>',
];

function makeFeatures(arr) {
	const newArr = [];
	arr.forEach((el) => {
		console.log(el);
		const word = el.split('>')[1].replace('</option', '');
		// const val = el.split(' ')[5].replace('><label', '');
		// console.log(word);
		// console.log(val);
		// const option = `'<option ${val}>${word}</option>',`;
		// console.log(option);
		// newArr.push(option);
	});
	return newArr.join(',');
}

// console.log(makeFeatures(features));

const feat = [
	'<li class="feature_category_bargain_en"><input id="feature_checkbox_1" type="checkbox" name="features[6254]" value="6254"><label for="feature_checkbox_1">Bargain</label></li>',
	'<li class="feature_category_beachfront_en"><input id="feature_checkbox_2" type="checkbox" name="features[6256]" value="6256"><label for="feature_checkbox_2">Beachfront</label></li>',
	'<li class="feature_category_cheap_en"><input id="feature_checkbox_3" type="checkbox" name="features[6258]" value="6258"><label for="feature_checkbox_3">Cheap</label></li>',
	'<li class="feature_category_contemporary_en"><input id="feature_checkbox_4" type="checkbox" name="features[6280]" value="6280"><label for="feature_checkbox_4">Contemporary</label></li>',
	'<li class="feature_category_distressed_en"><input id="feature_checkbox_5" type="checkbox" name="features[6260]" value="6260"><label for="feature_checkbox_5">Distressed</label></li>',
	'<li class="feature_category_golf_en"><input id="feature_checkbox_6" type="checkbox" name="features[6262]" value="6262"><label for="feature_checkbox_6">Golf</label></li>',
	'<li class="feature_category_holiday-homes_en"><input id="feature_checkbox_7" type="checkbox" name="features[6264]" value="6264"><label for="feature_checkbox_7">Holiday Homes</label></li>',
	'<li class="feature_category_investment_en"><input id="feature_checkbox_8" type="checkbox" name="features[6266]" value="6266"><label for="feature_checkbox_8">Investment</label></li>',
	'<li class="feature_category_luxury_en"><input id="feature_checkbox_9" type="checkbox" name="features[6268]" value="6268"><label for="feature_checkbox_9">Luxury</label></li>',
	'<li class="feature_category_new-development_en"><input id="feature_checkbox_10" type="checkbox" name="features[6282]" value="6282"><label for="feature_checkbox_10">New Development</label></li>',
	'<li class="feature_category_off-plan_en"><input id="feature_checkbox_11" type="checkbox" name="features[6270]" value="6270"><label for="feature_checkbox_11">Off Plan</label></li>',
	'<li class="feature_category_reduced_en"><input id="feature_checkbox_12" type="checkbox" name="features[6272]" value="6272"><label for="feature_checkbox_12">Reduced</label></li>',
	'<li class="feature_category_repossession_en"><input id="feature_checkbox_13" type="checkbox" name="features[6274]" value="6274"><label for="feature_checkbox_13">Repossession</label></li>',
	'<li class="feature_category_resale_en"><input id="feature_checkbox_14" type="checkbox" name="features[6276]" value="6276"><label for="feature_checkbox_14">Resale</label></li>',
	'<li class="feature_category_with-planning-permission_en"><input id="feature_checkbox_15" type="checkbox" name="features[6278]" value="6278"><label for="feature_checkbox_15">With Planning Permission</label></li>',
	'<li class="feature_features_24-hour-reception_en"><input id="feature_checkbox_32" type="checkbox" name="features[6152]" value="6152"><label for="feature_checkbox_32">24 Hour Reception</label></li>',
	'<li class="feature_features_bar_en"><input id="feature_checkbox_33" type="checkbox" name="features[6144]" value="6144"><label for="feature_checkbox_33">Bar</label></li>',
	'<li class="feature_features_barbeque_en"><input id="feature_checkbox_34" type="checkbox" name="features[6146]" value="6146"><label for="feature_checkbox_34">Barbeque</label></li>',
	'<li class="feature_features_basement_en"><input id="feature_checkbox_35" type="checkbox" name="features[6170]" value="6170"><label for="feature_checkbox_35">Basement</label></li>',
	'<li class="feature_features_car-hire-facility_en"><input id="feature_checkbox_36" type="checkbox" name="features[6156]" value="6156"><label for="feature_checkbox_36">Car Hire Facility</label></li>',
	'<li class="feature_features_courtesy-bus_en"><input id="feature_checkbox_37" type="checkbox" name="features[6158]" value="6158"><label for="feature_checkbox_37">Courtesy Bus</label></li>',
	'<li class="feature_features_covered-terrace_en"><input id="feature_checkbox_38" type="checkbox" name="features[6100]" value="6100"><label for="feature_checkbox_38">Covered Terrace</label></li>',
	'<li class="feature_features_day-care_en"><input id="feature_checkbox_39" type="checkbox" name="features[6160]" value="6160"><label for="feature_checkbox_39">Day Care</label></li>',
	'<li class="feature_features_disabled-access_en"><input id="feature_checkbox_40" type="checkbox" name="features[6138]" value="6138"><label for="feature_checkbox_40">Disabled Access</label></li>',
	'<li class="feature_features_domotics_en"><input id="feature_checkbox_41" type="checkbox" name="features[6150]" value="6150"><label for="feature_checkbox_41">Domotics</label></li>',
	'<li class="feature_features_double-glazing_en"><input id="feature_checkbox_42" type="checkbox" name="features[6148]" value="6148"><label for="feature_checkbox_42">Double Glazing</label></li>',
	'<li class="feature_features_ensuite-bathroom_en"><input id="feature_checkbox_43" type="checkbox" name="features[6134]" value="6134"><label for="feature_checkbox_43">Ensuite Bathroom</label></li>',
	'<li class="feature_features_fiber-optic_en"><input id="feature_checkbox_44" type="checkbox" name="features[6172]" value="6172"><label for="feature_checkbox_44">Fiber Optic</label></li>',
	'<li class="feature_features_fitted-wardrobes_en"><input id="feature_checkbox_45" type="checkbox" name="features[6104]" value="6104"><label for="feature_checkbox_45">Fitted Wardrobes</label></li>',
	'<li class="feature_features_games-room_en"><input id="feature_checkbox_46" type="checkbox" name="features[6120]" value="6120"><label for="feature_checkbox_46">Games Room</label></li>',
	'<li class="feature_features_guest-apartment_en"><input id="feature_checkbox_47" type="checkbox" name="features[6126]" value="6126"><label for="feature_checkbox_47">Guest Apartment</label></li>',
	'<li class="feature_features_guest-house_en"><input id="feature_checkbox_48" type="checkbox" name="features[6128]" value="6128"><label for="feature_checkbox_48">Guest House</label></li>',
	'<li class="feature_features_gym_en"><input id="feature_checkbox_49" type="checkbox" name="features[6116]" value="6116"><label for="feature_checkbox_49">Gym</label></li>',
	'<li class="feature_features_handicap-access_en"><input id="feature_checkbox_50" type="checkbox" name="features[6174]" value="6174"><label for="feature_checkbox_50">Handicap access</label></li>',
	'<li class="feature_features_jacuzzi_en"><input id="feature_checkbox_51" type="checkbox" name="features[6142]" value="6142"><label for="feature_checkbox_51">Jacuzzi</label></li>',
	'<li class="feature_features_lift_en"><input id="feature_checkbox_52" type="checkbox" name="features[6102]" value="6102"><label for="feature_checkbox_52">Lift</label></li>',
	'<li class="feature_features_marble-flooring_en"><input id="feature_checkbox_53" type="checkbox" name="features[6140]" value="6140"><label for="feature_checkbox_53">Marble Flooring</label></li>',
	'<li class="feature_features_near-church_en"><input id="feature_checkbox_54" type="checkbox" name="features[6168]" value="6168"><label for="feature_checkbox_54">Near Church</label></li>',
	'<li class="feature_features_near-mosque_en"><input id="feature_checkbox_55" type="checkbox" name="features[6162]" value="6162"><label for="feature_checkbox_55">Near Mosque</label></li>',
	'<li class="feature_features_near-transport_en"><input id="feature_checkbox_56" type="checkbox" name="features[6106]" value="6106"><label for="feature_checkbox_56">Near Transport</label></li>',
	'<li class="feature_features_paddle-tennis_en"><input id="feature_checkbox_57" type="checkbox" name="features[6122]" value="6122"><label for="feature_checkbox_57">Paddle Tennis</label></li>',
	'<li class="feature_features_private-terrace_en"><input id="feature_checkbox_58" type="checkbox" name="features[6108]" value="6108"><label for="feature_checkbox_58">Private Terrace</label></li>',
	'<li class="feature_features_restaurant-on-site_en"><input id="feature_checkbox_59" type="checkbox" name="features[6154]" value="6154"><label for="feature_checkbox_59">Restaurant On Site</label></li>',
	'<li class="feature_features_satellite-tv_en"><input id="feature_checkbox_60" type="checkbox" name="features[6112]" value="6112"><label for="feature_checkbox_60">Satellite TV</label></li>',
	'<li class="feature_features_sauna_en"><input id="feature_checkbox_61" type="checkbox" name="features[6118]" value="6118"><label for="feature_checkbox_61">Sauna</label></li>',
	'<li class="feature_features_solarium_en"><input id="feature_checkbox_62" type="checkbox" name="features[6110]" value="6110"><label for="feature_checkbox_62">Solarium</label></li>',
	'<li class="feature_features_stables_en"><input id="feature_checkbox_63" type="checkbox" name="features[6166]" value="6166"><label for="feature_checkbox_63">Stables</label></li>',
	'<li class="feature_features_staff-accommodation_en"><input id="feature_checkbox_64" type="checkbox" name="features[6164]" value="6164"><label for="feature_checkbox_64">Staff Accommodation</label></li>',
	'<li class="feature_features_storage-room_en"><input id="feature_checkbox_65" type="checkbox" name="features[6130]" value="6130"><label for="feature_checkbox_65">Storage Room</label></li>',
	'<li class="feature_features_tennis-court_en"><input id="feature_checkbox_66" type="checkbox" name="features[6124]" value="6124"><label for="feature_checkbox_66">Tennis Court</label></li>',
	'<li class="feature_features_utility-room_en"><input id="feature_checkbox_67" type="checkbox" name="features[6132]" value="6132"><label for="feature_checkbox_67">Utility Room</label></li>',
	'<li class="feature_features_wifi_en"><input id="feature_checkbox_68" type="checkbox" name="features[6114]" value="6114"><label for="feature_checkbox_68">WiFi</label></li>',
	'<li class="feature_features_wood-flooring_en"><input id="feature_checkbox_69" type="checkbox" name="features[6136]" value="6136"><label for="feature_checkbox_69">Wood Flooring</label></li>',
	'<li class="feature_setting_beachfront_en"><input id="feature_checkbox_146" type="checkbox" name="features[5954]" value="5954"><label for="feature_checkbox_146">Beachfront</label></li>',
	'<li class="feature_setting_beachside_en"><input id="feature_checkbox_147" type="checkbox" name="features[5966]" value="5966"><label for="feature_checkbox_147">Beachside</label></li>',
	'<li class="feature_setting_close-to-forest_en"><input id="feature_checkbox_148" type="checkbox" name="features[5988]" value="5988"><label for="feature_checkbox_148">Close To Forest</label></li>',
	'<li class="feature_setting_close-to-golf_en"><input id="feature_checkbox_149" type="checkbox" name="features[5974]" value="5974"><label for="feature_checkbox_149">Close To Golf</label></li>',
	'<li class="feature_setting_close-to-marina_en"><input id="feature_checkbox_150" type="checkbox" name="features[5992]" value="5992"><label for="feature_checkbox_150">Close To Marina</label></li>',
	'<li class="feature_setting_close-to-port_en"><input id="feature_checkbox_151" type="checkbox" name="features[5976]" value="5976"><label for="feature_checkbox_151">Close To Port</label></li>',
	'<li class="feature_setting_close-to-schools_en"><input id="feature_checkbox_152" type="checkbox" name="features[5984]" value="5984"><label for="feature_checkbox_152">Close To Schools</label></li>',
	'<li class="feature_setting_close-to-sea_en"><input id="feature_checkbox_153" type="checkbox" name="features[5980]" value="5980"><label for="feature_checkbox_153">Close To Sea</label></li>',
	'<li class="feature_setting_close-to-shops_en"><input id="feature_checkbox_154" type="checkbox" name="features[5978]" value="5978"><label for="feature_checkbox_154">Close To Shops</label></li>',
	'<li class="feature_setting_close-to-skiing_en"><input id="feature_checkbox_155" type="checkbox" name="features[5986]" value="5986"><label for="feature_checkbox_155">Close To Skiing</label></li>',
	'<li class="feature_setting_close-to-town_en"><input id="feature_checkbox_156" type="checkbox" name="features[5982]" value="5982"><label for="feature_checkbox_156">Close To Town</label></li>',
	'<li class="feature_setting_commercial-area_en"><input id="feature_checkbox_157" type="checkbox" name="features[5964]" value="5964"><label for="feature_checkbox_157">Commercial Area</label></li>',
	'<li class="feature_setting_country_en"><input id="feature_checkbox_158" type="checkbox" name="features[5962]" value="5962"><label for="feature_checkbox_158">Country</label></li>',
	'<li class="feature_setting_front-line-beach-complex_en"><input id="feature_checkbox_159" type="checkbox" name="features[5996]" value="5996"><label for="feature_checkbox_159">Front Line Beach Complex</label></li>',
	'<li class="feature_setting_frontline-golf_en"><input id="feature_checkbox_160" type="checkbox" name="features[5956]" value="5956"><label for="feature_checkbox_160">Frontline Golf</label></li>',
	'<li class="feature_setting_marina_en"><input id="feature_checkbox_161" type="checkbox" name="features[5990]" value="5990"><label for="feature_checkbox_161">Marina</label></li>',
	'<li class="feature_setting_mountain-pueblo_en"><input id="feature_checkbox_162" type="checkbox" name="features[5972]" value="5972"><label for="feature_checkbox_162">Mountain Pueblo</label></li>',
	'<li class="feature_setting_port_en"><input id="feature_checkbox_163" type="checkbox" name="features[5968]" value="5968"><label for="feature_checkbox_163">Port</label></li>',
	'<li class="feature_setting_suburban_en"><input id="feature_checkbox_164" type="checkbox" name="features[5960]" value="5960"><label for="feature_checkbox_164">Suburban</label></li>',
	'<li class="feature_setting_town_en"><input id="feature_checkbox_165" type="checkbox" name="features[5958]" value="5958"><label for="feature_checkbox_165">Town</label></li>',
	'<li class="feature_setting_urbanisation_en"><input id="feature_checkbox_166" type="checkbox" name="features[5994]" value="5994"><label for="feature_checkbox_166">Urbanisation</label></li>',
	'<li class="feature_setting_village_en"><input id="feature_checkbox_167" type="checkbox" name="features[5970]" value="5970"><label for="feature_checkbox_167">Village</label></li>',
];

const pool = [
	'<li class="feature_pool_childrens-pool_en"><input id="feature_checkbox_130" type="checkbox" name="features[6046]" value="6046"><label for="feature_checkbox_130">Childrens Pool</label></li>',
	'<li class="feature_pool_communal-pool_en"><input id="feature_checkbox_131" type="checkbox" name="features[6036]" value="6036"><label for="feature_checkbox_131">Communal Pool</label></li>',
	'<li class="feature_pool_heated-pool_en"><input id="feature_checkbox_132" type="checkbox" name="features[6042]" value="6042"><label for="feature_checkbox_132">Heated Pool</label></li>',
	'<li class="feature_pool_indoor-pool_en"><input id="feature_checkbox_133" type="checkbox" name="features[6040]" value="6040"><label for="feature_checkbox_133">Indoor Pool</label></li>',
	'<li class="feature_pool_private-pool_en"><input id="feature_checkbox_134" type="checkbox" name="features[6038]" value="6038"><label for="feature_checkbox_134">Private Pool</label></li>',
	'<li class="feature_pool_room-for-pool_en"><input id="feature_checkbox_135" type="checkbox" name="features[6044]" value="6044"><label for="feature_checkbox_135">Room For Pool</label></li>',
];

const json = {
	transaction: {
		status: 'success',
		errordescription: {},
		incomingIp: '185.143.147.231',
		version: '6.0',
		service: 'Search Features',
		datetime: '25-05-2023 12:19:35',
	},
	QueryInfo: {
		ApiId: '39328',
		FeaturesCount: '188',
	},
	FeaturesData: {
		Category: [
			{
				'@attributes': {
					Name: 'Setting',
				},
				Feature: [
					{
						Name: 'Beachfront',
						ParamName: '1Setting1',
					},
					{
						Name: 'Frontline Golf',
						ParamName: '1Setting2',
					},
					{
						Name: 'Town',
						ParamName: '1Setting3',
					},
					{
						Name: 'Suburban',
						ParamName: '1Setting4',
					},
					{
						Name: 'Country',
						ParamName: '1Setting5',
					},
					{
						Name: 'Commercial Area',
						ParamName: '1Setting6',
					},
					{
						Name: 'Beachside',
						ParamName: '1Setting7',
					},
					{
						Name: 'Port',
						ParamName: '1Setting8',
					},
					{
						Name: 'Village',
						ParamName: '1Setting9',
					},
					{
						Name: 'Mountain Pueblo',
						ParamName: '1Setting10',
					},
					{
						Name: 'Close To Golf',
						ParamName: '1Setting11',
					},
					{
						Name: 'Close To Port',
						ParamName: '1Setting12',
					},
					{
						Name: 'Close To Shops',
						ParamName: '1Setting13',
					},
					{
						Name: 'Close To Sea',
						ParamName: '1Setting14',
					},
					{
						Name: 'Close To Town',
						ParamName: '1Setting15',
					},
					{
						Name: 'Close To Schools',
						ParamName: '1Setting16',
					},
					{
						Name: 'Close To Skiing',
						ParamName: '1Setting17',
					},
					{
						Name: 'Close To Forest',
						ParamName: '1Setting18',
					},
					{
						Name: 'Marina',
						ParamName: '1Setting19',
					},
					{
						Name: 'Close To Marina',
						ParamName: '1Setting20',
					},
					{
						Name: 'Urbanisation',
						ParamName: '1Setting21',
					},
					{
						Name: 'Front Line Beach Complex',
						ParamName: '1Setting22',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Orientation',
				},
				Feature: [
					{
						Name: 'North Facing',
						ParamName: '1Orientation1',
					},
					{
						Name: 'North East Orientation',
						ParamName: '1Orientation2',
					},
					{
						Name: 'East Facing',
						ParamName: '1Orientation3',
					},
					{
						Name: 'South East Orientation',
						ParamName: '1Orientation4',
					},
					{
						Name: 'South Facing',
						ParamName: '1Orientation5',
					},
					{
						Name: 'South West Orientation',
						ParamName: '1Orientation6',
					},
					{
						Name: 'West Facing',
						ParamName: '1Orientation7',
					},
					{
						Name: 'North West Orientation',
						ParamName: '1Orientation8',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Condition',
				},
				Feature: [
					{
						Name: 'Excellent Condition',
						ParamName: '1Condition1',
					},
					{
						Name: 'Good Condition',
						ParamName: '1Condition2',
					},
					{
						Name: 'Fair Condition',
						ParamName: '1Condition3',
					},
					{
						Name: 'Renovation Required',
						ParamName: '1Condition4',
					},
					{
						Name: 'Recently Renovated',
						ParamName: '1Condition5',
					},
					{
						Name: 'Recently Refurbished',
						ParamName: '1Condition6',
					},
					{
						Name: 'Restoration Required',
						ParamName: '1Condition7',
					},
					{
						Name: 'New Construction',
						ParamName: '1Condition8',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Pool',
				},
				Feature: [
					{
						Name: 'Communal Pool',
						ParamName: '1Pool1',
					},
					{
						Name: 'Private Pool',
						ParamName: '1Pool2',
					},
					{
						Name: 'Indoor Pool',
						ParamName: '1Pool3',
					},
					{
						Name: 'Heated Pool',
						ParamName: '1Pool4',
					},
					{
						Name: 'Room For Pool',
						ParamName: '1Pool5',
					},
					{
						Name: 'Childrens Pool',
						ParamName: '1Pool6',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Climate Control',
				},
				Feature: [
					{
						Name: 'Air Conditioning',
						ParamName: '1Climate Control1',
					},
					{
						Name: 'Pre Installed A/C',
						ParamName: '1Climate Control2',
					},
					{
						Name: 'Hot A/C',
						ParamName: '1Climate Control3',
					},
					{
						Name: 'Cold A/C',
						ParamName: '1Climate Control4',
					},
					{
						Name: 'Central Heating',
						ParamName: '1Climate Control5',
					},
					{
						Name: 'Fireplace',
						ParamName: '1Climate Control6',
					},
					{
						Name: 'U/F Heating',
						ParamName: '1Climate Control7',
					},
					{
						Name: 'U/F/H Bathrooms',
						ParamName: '1Climate Control8',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Views',
				},
				Feature: [
					{
						Name: 'Sea Views',
						ParamName: '1Views1',
					},
					{
						Name: 'Mountain Views',
						ParamName: '1Views2',
					},
					{
						Name: 'Golf Views',
						ParamName: '1Views3',
					},
					{
						Name: 'Beach Views',
						ParamName: '1Views4',
					},
					{
						Name: 'Port Views',
						ParamName: '1Views5',
					},
					{
						Name: 'Country Views',
						ParamName: '1Views6',
					},
					{
						Name: 'Panoramic Views',
						ParamName: '1Views7',
					},
					{
						Name: 'Garden Views',
						ParamName: '1Views8',
					},
					{
						Name: 'Pool Views',
						ParamName: '1Views9',
					},
					{
						Name: 'Courtyard Views',
						ParamName: '1Views10',
					},
					{
						Name: 'Lake Views',
						ParamName: '1Views11',
					},
					{
						Name: 'Urban Views',
						ParamName: '1Views12',
					},
					{
						Name: 'Ski Views',
						ParamName: '1Views13',
					},
					{
						Name: 'Forest Views',
						ParamName: '1Views14',
					},
					{
						Name: 'Street Views',
						ParamName: '1Views15',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Features',
				},
				Feature: [
					{
						Name: 'Covered Terrace',
						ParamName: '1Features1',
					},
					{
						Name: 'Lift',
						ParamName: '1Features2',
					},
					{
						Name: 'Fitted Wardrobes',
						ParamName: '1Features3',
					},
					{
						Name: 'Near Transport',
						ParamName: '1Features4',
					},
					{
						Name: 'Private Terrace',
						ParamName: '1Features5',
					},
					{
						Name: 'Solarium',
						ParamName: '1Features6',
					},
					{
						Name: 'Satellite TV',
						ParamName: '1Features7',
					},
					{
						Name: 'WiFi',
						ParamName: '1Features8',
					},
					{
						Name: 'Gym',
						ParamName: '1Features9',
					},
					{
						Name: 'Sauna',
						ParamName: '1Features10',
					},
					{
						Name: 'Games Room',
						ParamName: '1Features11',
					},
					{
						Name: 'Paddle Tennis',
						ParamName: '1Features12',
					},
					{
						Name: 'Tennis Court',
						ParamName: '1Features13',
					},
					{
						Name: 'Guest Apartment',
						ParamName: '1Features14',
					},
					{
						Name: 'Guest House',
						ParamName: '1Features15',
					},
					{
						Name: 'Storage Room',
						ParamName: '1Features16',
					},
					{
						Name: 'Utility Room',
						ParamName: '1Features17',
					},
					{
						Name: 'Ensuite Bathroom',
						ParamName: '1Features18',
					},
					{
						Name: 'Wood Flooring',
						ParamName: '1Features19',
					},
					{
						Name: 'Disabled Access',
						ParamName: '1Features20',
					},
					{
						Name: 'Marble Flooring',
						ParamName: '1Features22',
					},
					{
						Name: 'Jacuzzi',
						ParamName: '1Features23',
					},
					{
						Name: 'Bar',
						ParamName: '1Features24',
					},
					{
						Name: 'Barbeque',
						ParamName: '1Features25',
					},
					{
						Name: 'Double Glazing',
						ParamName: '1Features27',
					},
					{
						Name: 'Domotics',
						ParamName: '1Features28',
					},
					{
						Name: '24 Hour Reception',
						ParamName: '1Features29',
					},
					{
						Name: 'Restaurant On Site',
						ParamName: '1Features30',
					},
					{
						Name: 'Car Hire Facility',
						ParamName: '1Features31',
					},
					{
						Name: 'Courtesy Bus',
						ParamName: '1Features32',
					},
					{
						Name: 'Day Care',
						ParamName: '1Features33',
					},
					{
						Name: 'Near Mosque',
						ParamName: '1Features34',
					},
					{
						Name: 'Staff Accommodation',
						ParamName: '1Features35',
					},
					{
						Name: 'Stables',
						ParamName: '1Features36',
					},
					{
						Name: 'Near Church',
						ParamName: '1Features37',
					},
					{
						Name: 'Basement',
						ParamName: '1Features38',
					},
					{
						Name: 'Fiber Optic',
						ParamName: '1Features39',
					},
					{
						Name: 'Handicap access',
						ParamName: '1Features60',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Furniture',
				},
				Feature: [
					{
						Name: 'Fully Furnished',
						ParamName: '1Furniture1',
					},
					{
						Name: 'Part Furnished',
						ParamName: '1Furniture2',
					},
					{
						Name: 'Not Furnished',
						ParamName: '1Furniture3',
					},
					{
						Name: 'Optional Furniture',
						ParamName: '1Furniture4',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Kitchen',
				},
				Feature: [
					{
						Name: 'Fully Fitted Kitchen',
						ParamName: '1Kitchen1',
					},
					{
						Name: 'Partially Fitted Kitchen',
						ParamName: '1Kitchen2',
					},
					{
						Name: 'Not Fitted Kitchen',
						ParamName: '1Kitchen3',
					},
					{
						Name: 'Kitchen-Lounge',
						ParamName: '1Kitchen4',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Garden',
				},
				Feature: [
					{
						Name: 'Communal Garden',
						ParamName: '1Garden1',
					},
					{
						Name: 'Private Garden',
						ParamName: '1Garden2',
					},
					{
						Name: 'Landscaped Garden',
						ParamName: '1Garden3',
					},
					{
						Name: 'Easy Maintenance Garden',
						ParamName: '1Garden4',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Security',
				},
				Feature: [
					{
						Name: 'Gated Complex',
						ParamName: '1Security1',
					},
					{
						Name: 'Electric Blinds',
						ParamName: '1Security2',
					},
					{
						Name: 'Entry Phone',
						ParamName: '1Security3',
					},
					{
						Name: 'Alarm System',
						ParamName: '1Security4',
					},
					{
						Name: '24 Hour Security',
						ParamName: '1Security5',
					},
					{
						Name: 'Safe',
						ParamName: '1Security6',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Parking',
				},
				Feature: [
					{
						Name: 'Underground Parking',
						ParamName: '1Parking1',
					},
					{
						Name: 'Garage',
						ParamName: '1Parking2',
					},
					{
						Name: 'Covered Parking',
						ParamName: '1Parking3',
					},
					{
						Name: 'Open Parking',
						ParamName: '1Parking4',
					},
					{
						Name: 'Street Parking',
						ParamName: '1Parking5',
					},
					{
						Name: 'Multiple Parking Spaces',
						ParamName: '1Parking6',
					},
					{
						Name: 'Communal Parking',
						ParamName: '1Parking7',
					},
					{
						Name: 'Private Parking',
						ParamName: '1Parking8',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Utilities',
				},
				Feature: [
					{
						Name: 'Electricity',
						ParamName: '1Utilities1',
					},
					{
						Name: 'Drinkable Water',
						ParamName: '1Utilities2',
					},
					{
						Name: 'Telephone',
						ParamName: '1Utilities3',
					},
					{
						Name: 'Gas',
						ParamName: '1Utilities4',
					},
					{
						Name: 'Photovoltaic solar panels',
						ParamName: '1Utilities8',
					},
					{
						Name: 'Solar water heating',
						ParamName: '1Utilities9',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Category',
				},
				Feature: [
					{
						Name: 'Bargain',
						ParamName: '1Category1',
					},
					{
						Name: 'Beachfront',
						ParamName: '1Category2',
					},
					{
						Name: 'Cheap',
						ParamName: '1Category3',
					},
					{
						Name: 'Distressed',
						ParamName: '1Category4',
					},
					{
						Name: 'Golf',
						ParamName: '1Category5',
					},
					{
						Name: 'Holiday Homes',
						ParamName: '1Category6',
					},
					{
						Name: 'Investment',
						ParamName: '1Category7',
					},
					{
						Name: 'Luxury',
						ParamName: '1Category8',
					},
					{
						Name: 'Off Plan',
						ParamName: '1Category9',
					},
					{
						Name: 'Reduced',
						ParamName: '1Category10',
					},
					{
						Name: 'Repossession',
						ParamName: '1Category11',
					},
					{
						Name: 'Resale',
						ParamName: '1Category12',
					},
					{
						Name: 'With Planning Permission',
						ParamName: '1Category13',
					},
					{
						Name: 'Contemporary',
						ParamName: '1Category14',
					},
					{
						Name: 'New Development',
						ParamName: '1Category15',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Plots and Ventures',
				},
				Feature: [
					{
						Name: 'Plot',
						ParamName: '2Plots and Ventures1',
					},
					{
						Name: 'With License',
						ParamName: '2Plots and Ventures2',
					},
					{
						Name: 'Without License',
						ParamName: '2Plots and Ventures3',
					},
					{
						Name: 'Residential',
						ParamName: '2Plots and Ventures4',
					},
					{
						Name: 'Commercial',
						ParamName: '2Plots and Ventures5',
					},
					{
						Name: 'Project',
						ParamName: '2Plots and Ventures6',
					},
					{
						Name: 'Rustic',
						ParamName: '2Plots and Ventures7',
					},
					{
						Name: 'Urbanised',
						ParamName: '2Plots and Ventures8',
					},
					{
						Name: 'Fully Approved',
						ParamName: '2Plots and Ventures9',
					},
					{
						Name: 'Not Started',
						ParamName: '2Plots and Ventures10',
					},
					{
						Name: 'Partially Complete',
						ParamName: '2Plots and Ventures11',
					},
					{
						Name: 'Fully Complete',
						ParamName: '2Plots and Ventures12',
					},
					{
						Name: 'Hotel',
						ParamName: '2Plots and Ventures13',
					},
					{
						Name: 'Hostel',
						ParamName: '2Plots and Ventures14',
					},
					{
						Name: 'Bed and Breakfast',
						ParamName: '2Plots and Ventures15',
					},
					{
						Name: 'Bar',
						ParamName: '2Plots and Ventures16',
					},
					{
						Name: 'Restaurant',
						ParamName: '2Plots and Ventures17',
					},
					{
						Name: 'Shop',
						ParamName: '2Plots and Ventures18',
					},
					{
						Name: 'Office',
						ParamName: '2Plots and Ventures19',
					},
					{
						Name: 'Apartments',
						ParamName: '2Plots and Ventures20',
					},
					{
						Name: 'Town Houses',
						ParamName: '2Plots and Ventures21',
					},
					{
						Name: 'Villas',
						ParamName: '2Plots and Ventures22',
					},
					{
						Name: 'Nursing Home',
						ParamName: '2Plots and Ventures23',
					},
					{
						Name: 'Hospital',
						ParamName: '2Plots and Ventures24',
					},
					{
						Name: 'School',
						ParamName: '2Plots and Ventures25',
					},
					{
						Name: 'Sports Centre',
						ParamName: '2Plots and Ventures26',
					},
					{
						Name: 'Equestrian Centre',
						ParamName: '2Plots and Ventures27',
					},
					{
						Name: 'Golf Course',
						ParamName: '2Plots and Ventures28',
					},
					{
						Name: 'Garage Space',
						ParamName: '2Plots and Ventures29',
					},
					{
						Name: 'Warehouse',
						ParamName: '2Plots and Ventures30',
					},
					{
						Name: 'Leasehold',
						ParamName: '2Plots and Ventures31',
					},
					{
						Name: 'Gymnasium',
						ParamName: '2Plots and Ventures32',
					},
				],
			},
			{
				'@attributes': {
					Name: 'Rentals',
				},
				Feature: [
					{
						Name: 'Bank Guarantee Required',
						ParamName: '3Rentals1',
					},
					{
						Name: 'References Required',
						ParamName: '3Rentals2',
					},
					{
						Name: 'Smoking Allowed',
						ParamName: '3Rentals3',
					},
					{
						Name: 'Pets Allowed',
						ParamName: '3Rentals4',
					},
				],
			},
		],
	},
};


{
    "transaction": {
        "status": "success",
        "errordescription": "",
        "incomingIp": "185.143.147.231",
        "version": 6,
        "service": "Search Property Types",
        "datetime": "25-05-2023 13:21:20"
    },
    "QueryInfo": {
        "ApiId": 39328,
        "PropertyTypesCount": 64
    },
    "PropertyTypes": {
        "PropertyType": [
            {
                "Type": "Apartment",
                "OptionValue": "1-1",
                "SubType": [
                    {
                        "Type": "Ground Floor Apartment",
                        "OptionValue": "1-2"
                    },
                    {
                        "Type": "Middle Floor Apartment",
                        "OptionValue": "1-4"
                    },
                    {
                        "Type": "Top Floor Apartment",
                        "OptionValue": "1-5"
                    },
                    {
                        "Type": "Penthouse",
                        "OptionValue": "1-6"
                    },
                    {
                        "Type": "Penthouse Duplex",
                        "OptionValue": "1-7"
                    },
                    {
                        "Type": "Duplex",
                        "OptionValue": "1-8"
                    },
                    {
                        "Type": "Ground Floor Studio",
                        "OptionValue": "1-9"
                    },
                    {
                        "Type": "Middle Floor Studio",
                        "OptionValue": "1-10"
                    },
                    {
                        "Type": "Top Floor Studio",
                        "OptionValue": "1-11"
                    }
                ]
            },
            {
                "Type": "House",
                "OptionValue": "2-1",
                "SubType": [
                    {
                        "Type": "Detached Villa",
                        "OptionValue": "2-2"
                    },
                    {
                        "Type": "Semi-Detached House",
                        "OptionValue": "2-4"
                    },
                    {
                        "Type": "Townhouse",
                        "OptionValue": "2-5"
                    },
                    {
                        "Type": "Finca - Cortijo",
                        "OptionValue": "2-6"
                    },
                    {
                        "Type": "Bungalow",
                        "OptionValue": "2-9"
                    },
                    {
                        "Type": "Quad",
                        "OptionValue": "2-10"
                    },
                    {
                        "Type": "Castle",
                        "OptionValue": "2-12"
                    },
                    {
                        "Type": "City Palace",
                        "OptionValue": "2-13"
                    },
                    {
                        "Type": "Wooden Cabin",
                        "OptionValue": "2-14"
                    },
                    {
                        "Type": "Wooden House",
                        "OptionValue": "2-15"
                    },
                    {
                        "Type": "Mobile Home",
                        "OptionValue": "2-16"
                    },
                    {
                        "Type": "Cave House",
                        "OptionValue": "2-17"
                    }
                ]
            },
            {
                "Type": "Plot",
                "OptionValue": "3-1",
                "SubType": [
                    {
                        "Type": "Residential Plot",
                        "OptionValue": "3-2"
                    },
                    {
                        "Type": "Commercial Plot",
                        "OptionValue": "3-3"
                    },
                    {
                        "Type": "Land",
                        "OptionValue": "3-4"
                    },
                    {
                        "Type": "Land with Ruin",
                        "OptionValue": "3-5"
                    }
                ]
            },
            {
                "Type": "Commercial",
                "OptionValue": "4-1",
                "SubType": [
                    {
                        "Type": "Bar",
                        "OptionValue": "4-2"
                    },
                    {
                        "Type": "Restaurant",
                        "OptionValue": "4-3"
                    },
                    {
                        "Type": "Café",
                        "OptionValue": "4-4"
                    },
                    {
                        "Type": "Hotel",
                        "OptionValue": "4-5"
                    },
                    {
                        "Type": "Hostel",
                        "OptionValue": "4-6"
                    },
                    {
                        "Type": "Guest House",
                        "OptionValue": "4-7"
                    },
                    {
                        "Type": "Bed and Breakfast",
                        "OptionValue": "4-8"
                    },
                    {
                        "Type": "Shop",
                        "OptionValue": "4-9"
                    },
                    {
                        "Type": "Office",
                        "OptionValue": "4-10"
                    },
                    {
                        "Type": "Storage Room",
                        "OptionValue": "4-11"
                    },
                    {
                        "Type": "Parking Space",
                        "OptionValue": "4-12"
                    },
                    {
                        "Type": "Farm",
                        "OptionValue": "4-13"
                    },
                    {
                        "Type": "Night Club",
                        "OptionValue": "4-15"
                    },
                    {
                        "Type": "Warehouse",
                        "OptionValue": "4-16"
                    },
                    {
                        "Type": "Garage",
                        "OptionValue": "4-17"
                    },
                    {
                        "Type": "Business",
                        "OptionValue": "4-18"
                    },
                    {
                        "Type": "Mooring",
                        "OptionValue": "4-19"
                    },
                    {
                        "Type": "Stables",
                        "OptionValue": "4-20"
                    },
                    {
                        "Type": "Kiosk",
                        "OptionValue": "4-21"
                    },
                    {
                        "Type": "Chiringuito",
                        "OptionValue": "4-22"
                    },
                    {
                        "Type": "Beach Bar",
                        "OptionValue": "4-23"
                    },
                    {
                        "Type": "Mechanics",
                        "OptionValue": "4-24"
                    },
                    {
                        "Type": "Hairdressers",
                        "OptionValue": "4-25"
                    },
                    {
                        "Type": "Photography Studio",
                        "OptionValue": "4-26"
                    },
                    {
                        "Type": "Laundry",
                        "OptionValue": "4-27"
                    },
                    {
                        "Type": "Aparthotel",
                        "OptionValue": "4-28"
                    },
                    {
                        "Type": "Apartment Complex",
                        "OptionValue": "4-29"
                    },
                    {
                        "Type": "Residential Home",
                        "OptionValue": "4-30"
                    },
                    {
                        "Type": "Vineyard",
                        "OptionValue": "4-32"
                    },
                    {
                        "Type": "Olive Grove",
                        "OptionValue": "4-33"
                    },
                    {
                        "Type": "Car Park",
                        "OptionValue": "4-34"
                    },
                    {
                        "Type": "Commercial Premises",
                        "OptionValue": "4-35"
                    },
                    {
                        "Type": "Campsite",
                        "OptionValue": "4-36"
                    },
                    {
                        "Type": "With Residence",
                        "OptionValue": "4-37"
                    },
                    {
                        "Type": "Other",
                        "OptionValue": "4-100"
                    }
                ]
            }
        ]
    }
}