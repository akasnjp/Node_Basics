// console.log("Welcome Jyotiprakash");

const jyoti = require('./math')     //require is used for to import files from other sections
// console.log("Math value is" ,jyoti(2,4));  //here jyoti stores require(./math) which have access to math.js directory and in that directory it have module.exports which provides add function to it
// console.log("Math value", jyoti.add(6, 4));
console.log("Multiplied value", jyoti.mul(2,2));