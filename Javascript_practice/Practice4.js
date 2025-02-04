let mydate = new Date();

console.log(mydate);
//2025-02-04T05:57:18.349Z
console.log(mydate.toString());
//Tue Feb 04 2025 11:27:18 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());
//Tue Feb 04 2025
console.log(mydate.toISOString());
//2025-02-04T05:57:18.349Z
console.log(mydate.toJSON());
//2025-02-04T05:57:18.349Z
console.log(mydate.toLocaleDateString());
//2/4/2025
console.log(mydate.toLocaleTimeString());
//11:27:18 AM
console.log(mydate.toUTCString());
//Tue, 04 Feb 2025 05:57:18 GMT

//on creating date there are several ways

let date1 = new Date(2025, 1, 4)
console.log(date1.toLocaleString());
let date2 = new Date(2025, 1, 4, 5, 3)
console.log(date2.toLocaleString());
let date3 = new Date("2025-02-04")
console.log(date3.toLocaleString());
let date4 = new Date("02-04-2025")
console.log(date4.toLocaleString());
