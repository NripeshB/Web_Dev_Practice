
//Could be done this way: 
const name = "Nripesh";
const lastname = "Bhusal";
console.log(name + lastname);

//but a better method would be to  use string interpolation
console.log(`Hello my name is ${name} and my last name is ${lastname}`);


const Name = new String(" Nripesh ");
console.log(Name.length)//returns the length of the string.

//other methods: 

console.log(Name.toUpperCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('s'));
console.log(Name.substring(0,4));

const newstring = "      nripesh        " //there is extra spaces at start and end.

console.log(newstring);
console.log(newstring.trim());


//when we get weird ass urls eg:
//"https://google.com/nripesh%20bhusal"
//we need to remove the %20 to make the url usable so:

const url = "https://google.com/nripesh%20bhusal";
console.log(url.replace('%20' , '-')); //this method does the job