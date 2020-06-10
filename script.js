'use strict';

let userString = prompt('Введите данные');


function cropString(str, strLength) {
	if (str.length > 30) {
		return str.substr(0, strLength) + '...';
	}
}


function getString(str) {
	if(typeof(str) === 'string') {
		alert('Поздравляю! У вас строка!');
		console.log(str.trim());
	}
}

getString(userString);
console.log(cropString(userString, 30));

