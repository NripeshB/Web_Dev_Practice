// const balance = 100 //acceptable way to define a number

// const principal = new Number(1000)//also acceptable;

// console.log( balance.toString().length); //to access the length of the number it is converted to string and then check its length.

// console.log( balance.toFixed(2));
// //gives the prescision till 2nd decimal place

// const othernum = 123.9868
// console.log(othernum.toPrecision(4))
// console.log(othernum.toPrecision(3))
// console.log(othernum.toPrecision(6))
// //returns the first 4 significant figures rounded off. Works till 21st place.

// const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());// gives the american numbering standard
// console.log(hundreds.toLocaleString("en-IN"));// gives the Indian numbering standard




console.log(Math.abs(-4)); //gives the absolute value

console.log(Math.round(4.6)); //rounds off the number to the closest non decimal place
console.log(Math.ceil(4.2)); //returns the top num value to the decimal
console.log(Math.floor(4.9))// gives the bottom value to the decimal 

//other methods
//sqrt - square root
//pow. - power
//max( num1, num2 ...)
//min ( num1, num2 ...)

//random

//lets say we have no range then 

console.log(Math.random());

//for integer values below 10

console.log(Math.floor(Math.random()*10 ) + 1 )

//lets say we have a range from 10 to 20 


console.log(Math.floor(Math.random()*( 20 - 10 + 1)) + 10 ) 