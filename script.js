'use strict';

const arr = ['21464', '33456', '26403', '45643', '55543', '22222', '4444'];

let newArr = arr.filter(item => {
	return item[0] === '2' || item[0] === '4';
})

console.log(newArr);

////

function isPrime(value) {
	if (isNaN(value) || !isFinite(value) || value%1 || value < 2) return false; 
	let max=Math.floor(Math.sqrt(value));
	for (let i = 2; i <= max; i++) {
	  if (value % i==0) {
		return false;
	  }
	}
	return true;
  }

  let primaryNumber = [];
  
  for (let i = 2; i <= 100; i++) {
	if(isPrime(i)) 
	  primaryNumber.push(i);
  }

  console.log(primaryNumber);



