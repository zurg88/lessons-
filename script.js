'use strict';



  setInterval(() => {
	const timeDate = document.querySelector('.date');
	const fullDate = document.querySelector('.fulldate');

	let date = new Date(), 
	hours = date.getHours(),
	minutes = date.getMinutes(),
	seconds = date.getSeconds(),
	year = date.getFullYear(),
	month = date.getMonth(),
	day = date.getDate();

	
	const arrHoursStr = ['час', 'часа', 'часов'];
	 let hoursStr;
	 if (hours < 2) {
		hoursStr = arrHoursStr[0];
	 } else if (hours > 1 || hours < 20) {
		hoursStr = arrHoursStr[2];
	 } else {
		hoursStr = arrHoursStr[1];
	 }

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
		timezone: 'UTC',
	 };


	 const options2 = {
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	let zero = '0';

	function addZero(n) {
		 if(n < 10) {
			 return `${zero}${n}`;
		 } else {
			 return n;
		 }
	}
	fullDate.textContent = `a) - Сегодня ${date.toLocaleString('ru', options)} ${hours} 	${hoursStr} ${minutes} минуты ${seconds} секунд`;

	timeDate.textContent = `б) ${addZero(day)}.${addZero(month)}.${year}` + ' - ' + date.	toLocaleString("ru", options2);
 }, 1000);