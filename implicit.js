let a=1; // number
let b='10'; // string
let c=a+b; // here c is a string because of implicit type conversion
console.log(c); // output: '110'
console.log(typeof c); // output: string


console.log(a-b); // output: -9 because of implicit type conversion, here b is converted to number before subtraction
console.log(typeof (a-b)); // output: number




