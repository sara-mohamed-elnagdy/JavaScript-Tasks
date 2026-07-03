console.log(-Number.MIN_SAFE_INTEGER);

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;
console.log(Number.isInteger(num) + true); // 2

let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt) - true); // 10

console.log(Math.random(0,1,2,3,4)); // 0 || 1 || 2 || 3 || 4

//------------------------------------------------------------
// Strings :

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(userName.length - 6 , userName.length - 5).toLowerCase().repeat(3));  // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True