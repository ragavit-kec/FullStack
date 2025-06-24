const person={
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

console.log(person.name); // Output: John
console.log(person.age);    
person.greet(); // Output: Hello, my name is John and I am 30 years old.

// Adding a new property
person.city = "New York";
console.log(person.city); // Output: New York   