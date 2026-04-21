console.log(Boolean(0)); // output: false because 0 is falsy
console.log(Boolean('')); // output: false because empty string is falsy
console.log(Boolean(null)); // output: false because null is falsy
console.log(Boolean(undefined)); // output: false because undefined is falsy
console.log(Boolean(NaN)); // output: false because NaN is falsy
console.log(Boolean(-0)); // output: false because -0 is falsy
console.log(Boolean(0n)); // output: false because 0n is falsy

console.log(Boolean("aaa")); // output: true because non-empty string is truthy
console.log(Boolean([])); // output: true because empty array is truthy
console.log(Boolean({})); // output: true because empty object is truthy
console.log(Boolean(function(){})); // output: true because function is truthy
console.log(Boolean(true)); // output: true because true is truthy