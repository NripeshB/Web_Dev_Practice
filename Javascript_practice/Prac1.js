//const keyword creates a constant
const account_id = 12345
let account_email = "hitesh@google.com"
var account_password = "12345"
account_city = "jaipur";

/*
Prefer not to use Var, due to issue in block scope and functional scope

Only use let and const.

we can also declare variable without any type though not recommended if you know the type of the variable

*/

console.log( account_id)

console.table([account_id, account_email, account_password, account_city])

//typeof function

let num = 23;
let Name = ""
let random;

console.log(typeof num);
console.log(typeof Name);
//this returns object
console.log(typeof null);
//but this returns undefined
console.log(typeof random);



//strict checking

let a1 = 7;
let a2 = "7";

console.log(a1 == a2);
//above returns true due to type conversion

console.log(a1 === a2);
//above returns false due to strict check