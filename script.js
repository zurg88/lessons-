let num = 266219;
let str = String(num)
let arr = str.split('');
let amount = 1;



for (let i = 0; i < arr.length; i++) {
	 amount *=+ arr[i];

}

console.log(amount);

let amountPower = amount ** 3; // Возвёл в степень

console.log(amountPower);

console.log( String(amountPower).slice(0,2) );


