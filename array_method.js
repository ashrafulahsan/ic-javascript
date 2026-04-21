let num = [1, 2, 3, 4, 5];
let str = ['Hello', 'World', 'JavaScript'];

num.push(6); // adds 6 to the end of the array
console.log(num); // output: [1, 2, 3, 4, 5, 6]

num.pop(); // removes the last element from the array
console.log(num); // output: [1, 2, 3, 4, 5]

num.unshift(0); // adds 0 to the beginning of the array
console.log(num); // output: [0, 1, 2, 3, 4, 5]

num.shift(); // removes the first element from the array
console.log(num); // output: [1, 2, 3, 4, 5]

str.push('!'); // adds '!' to the end of the array
console.log(str); // output: ['Hello', 'World', 'JavaScript', '!']

str.pop(); // removes the last element from the array
console.log(str); // output: ['Hello', 'World', 'JavaScript']

str.unshift('Hi'); // adds 'Hi' to the beginning of the array
console.log(str); // output: ['Hi', 'Hello', 'World', 'JavaScript']

str.shift(); // removes the first element from the array
console.log(str); // output: ['Hello', 'World', 'JavaScript']

