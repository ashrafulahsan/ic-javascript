let num = 12.56789;
let num2 = 4;

console.log(num.toFixed(2)); // output: '12.57' because toFixed rounds the number to the specified number of decimal places and returns a string
console.log(num.toPrecision(4)); // output: '12.57' because toPrecision formats the number to the specified number of significant digits and returns a string
console.log(num.toExponential(2)); // output: '1.26e+1' because toExponential formats the number in exponential notation with the specified number of digits after the decimal point and returns a string   
console.log(num.toString()); // output: '12.56789' because toString converts the number to a string

console.log(Math.round(num)); // output: 13 because Math.round rounds the number to the nearest integer
console.log(Math.floor(num)); // output: 12 because Math.floor rounds the number down to the nearest integer
console.log(Math.ceil(num)); // output: 13 because Math.ceil rounds the number up to the nearest integer
console.log(Math.max(num, num2)); // output: 12.56789 because Math.max returns the largest of the given numbers
console.log(Math.min(num, num2)); // output: 4 because Math.min returns the smallest of the given numbers   
console.log(Math.random()); // output: a random number between 0 (inclusive) and 1 (exclusive) because Math.random returns a random floating-point number in the range [0, 1)
console.log(Math.pow(num2, 3)); // output: 64 because Math.pow returns the base to the exponent power, that is, num2 raised to the power of 3
console.log(Math.sqrt(num)); // output: 3.549647281785946 because Math.sqrt returns the square root of the number   
