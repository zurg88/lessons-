'use strict';

let date = new Date();

let day =date.getDay() - 1;

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let weekList = document.getElementById('week');


for (let i = 0; i < week.length; i++) {
	let li = document.createElement('li');
	li.innerText = week[i];
	weekList.append(li);
	if(i === day) {
		li.classList.add('day');
	} else if(week[i] === 'суббота' || week[i] === 'воскресенье') {
		li.classList.add('holiday');
	}
}



console.log(weekList);

