'use strict';


let lang = 'ru';

let ruDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let engDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let multyDays = [ ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
 				  ['Monday',	'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] ];

if ( lang === 'ru' ) {
	console.log(String(ruDays));
} else if ( lang === 'eng' ) {
	console.log(String(engDays));
} else {
	console.log('выберите язык!');
}

switch (lang) {
	case 'ru':
		console.log(String(ruDays));
		break;

	case 'eng':
		console.log(String(engDays));
		break;

	default:
		console.log('выберите язык!');
		break;
}

let showDays = lang === 'eng' ? console.log(...multyDays[1]) : console.log(...multyDays[0]);

/////////

let namePerson = prompt('Ваше имя?');

let person = (namePerson === 'Артём') ? console.log('Директор') : 
(namePerson === 'Максим') ? console.log('Преподователь') : console.log('Студент');