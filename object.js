let person = {
    name: "John", // property: name, value: "John"
    age: 30,
    location: {
        city: "New York",
        country: "USA",
        zip: "10001"
    },
    sayHello: function() { // method: sayHello
        console.log("Hello, my name is " + this.name);
    }
}

console.log(person);
console.log(person.name); // Accessing property
console.log(person.location.city); // Accessing nested property
person.sayHello(); // Calling method

console.log(person.location.zip); // Accessing another nested property
console.log(person['location']['country']); // Accessing nested property using bracket notation 

let my_city = 'city';
console.log(person.location[my_city]); // Accessing nested property using variable in bracket notation  

