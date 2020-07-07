'use strict';

function getUserNumber() {
	let userNumber = prompt('Угадай число от 1 до 100');
	if(isNaN(userNumber) || userNumber === "") {
		alert('Введи число!');
		getUserNumber();
	} else {
		return userNumber;
	}

}

function getRandomNumber(min, max) {
	let randomNum = min - 0.5 + Math.random() * (max - min + 1);
	console.log(Math.round(randomNum));
	return Math.round(randomNum);
}

function getWiner(ranNum) {
	let count = 10;
	 function result(ranNum) {
		let userNum = getUserNumber();
		
		  if(userNum === null || userNum === undefined) {
			alert('Игра окончена');
			count = 10;
		} else {
			userNum = +userNum;
			if(userNum === ranNum){
				let userUns = confirm('Вы победитель!Хотели бы сыграть еще?');
					if(userUns) {
						getWiner( getRandomNumber(1, 100));
					}
				count = 10;
			} else if(userNum < ranNum) {
				count--;
				breakGame(count);
				if (count > 0) {
					alert(`Загаданное число больше, осталось ${count} попыток`);
				result(ranNum);
				}
				
			}  else {
				count--;
				breakGame(count);
				if (count > 0) {
					alert('Загаданное число меньше, осталось ${count} попыток');
				result(ranNum);
				}
				 
			}

		}

		function breakGame(count) {
			if (count === 0) {
				let userUns = confirm('Попытки закончились, хотите сыграть еще?');
				if(userUns) {
					getWiner( getRandomNumber(1, 100));
				} else if(!userUns) {
					 alert('Игра окончена');
				}
			}
		}
	}
	result(ranNum);
	
}

getWiner( getRandomNumber(1, 100));



