let str = "Hello, World!";

console.log(str.length); // output: 13 because length property returns the number of characters in the string
console.log(str.toUpperCase()); // output: 'HELLO, WORLD!' because toUpperCase method converts all characters in the string to uppercase
console.log(str.toLowerCase()); // output: 'hello, world!' because toLowerCase method converts all characters in the string to lowercase
console.log(str.indexOf('o')); // output: 4 because indexOf method returns the index of the first occurrence of the specified value in the string
console.log(str.lastIndexOf('o')); // output: 8 because lastIndexOf method returns the index of the last occurrence of the specified value in the string
console.log(str.slice(0, 5)); // output: 'Hello' because slice method extracts a section of the string and returns it as a new string, here it extracts characters from index 0 to index 5 (not including index 5)
console.log(str.substring(0, 5)); // output: 'Hello' because substring method returns the part of the string between the start and end indexes, here it returns characters from index 0 to index 5 (not including index 5)
console.log(str.replace('World', 'JavaScript')); // output: 'Hello, JavaScript!' because replace method returns a new string with some or all matches of a pattern replaced by a replacement, here it replaces 'World' with 'JavaScript'
console.log(str.split(', ')); // output: ['Hello', 'World!'] because split method splits a string into an array of substrings based on the specified separator, here it splits the string at ', '
console.log(str.trim()); // output: 'Hello, World!' because trim method removes whitespace from both ends of the string, here there is no whitespace to remove so it returns the original string
console.log(str.charAt(0)); // output: 'H' because charAt method returns the character at the specified index in the string, here it returns the character at index 0
console.log(str.charCodeAt(0)); // output: 72 because charCodeAt method returns the Unicode of the character at the specified index in the string, here it returns the Unicode of 'H' which is 72
console.log(str.includes('World')); // output: true because includes method determines whether one string may be found within another string, here it checks if 'World' is present in the string and returns true
console.log(str.startsWith('Hello')); // output: true because startsWith method determines whether a string begins with the characters of a specified string, here it checks if the string starts with 'Hello' and returns true
console.log(str.endsWith('!')); // output: true because endsWith method determines whether a string ends with the characters of a specified string, here it checks if the string ends with '!' and returns true 
console.log(str.repeat(2)); // output: 'Hello, World!Hello, World!' because repeat method constructs and returns a new string which contains the specified number of copies of the string on which it was called, here it repeats the string 2 times
