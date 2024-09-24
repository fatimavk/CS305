//Data Types:

let isstring = "salam";
let isnumber = 18;
let isboolean = true;
let isUndefined = undefined;     
let ismynull = null;
let issymbol = Symbol("hello")
let isbigInt = 123456789012345678901234567890n

// 2.Print each variable type using typeof.

console.log(typeof isstring);
console.log(typeof isnumber);
console.log(typeof isboolean);
console.log(typeof isUndefined);
console.log(typeof ismynull);
console.log(typeof issymbol);
console.log(typeof isbigInt);

//Keywords:
// 3.Use let, const, and var to declare variables and explain their differences with examples.

let color = "pink"; //let: Only available in its block and cannot be reused.
console.log(color)

const city = "Tokyo"; //const: Like let, but must be set at declaration and cannot be changed.
console.log(city)

var fruit = "strawberry";
console.log(fruit) //var: Can be used anywhere in a function and can be reused.


// Backticks (Template Literals):
// 4.Use backticks to create a dynamic meessage that includes (firstName,lastName,age,country,hobby,occupation) variables.

let Name = "Fatima";
let age = 18;
let message = `My name is ${Name}. I am ${age} years old`;

console.log(message)

//  Operators:
// 5.Use arithmetic operators (+, -, *, /, %).

let a = 10;
let b = 5;

console.log(a + b); //15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0

// 6.Use comparison operators (==, ===, >, <, etc.).

console.log(a == b); //false
console.log(a === b); //false
console.log(a > b); //true
console.log(a < b); //false
console.log(a >= b); //true
console.log(a <= b); //false

// 7.Use logical operators (&&, ||, !).

let c = true;
let d = false;

console.log(c && d); //false
console.log(c || d); //true
console.log(!c);     //false
