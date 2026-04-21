let num = [1, 2, 3, 4, 5];
let str = ['Hello', 'World', 'JavaScript'];

// for loop
console.log('Using for loop:');
for (let i = 0; i < num.length; i++) {
    console.log(num[i]); // output: 1 2 3 4 5
}

// for...of loop
console.log('Using for...of loop:');
for (let n of num) {
    console.log(n); // output: 1 2 3 4 5
}

// forEach method
console.log('Using forEach method:');
num.forEach(function(n) {
    console.log(n); // output: 1 2 3 4 5
});

// for...in loop
console.log('Using for...in loop:');
for (let index in str) {
    console.log(str[index]); // output: 'Hello' 'World' 'JavaScript'
}

// for...of loop with string
console.log('Using for...of loop with string:');
for (let char of str[0]) {
    console.log(char); // output: 'H' 'e' 'l' 'l' 'o'
}

// forEach method with string
console.log('Using forEach method with string:');
str[0].split('').forEach(function(char) {
    console.log(char); // output: 'H' 'e' 'l' 'l' 'o'
});