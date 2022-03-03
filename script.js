// Functions
/* A JavaScript function is a block of code designed to perform a particular task.
console.log is also JavaScript built-in function.

Syntax:-
A function declaration (defining a function)
function name (parameter){
    return statements
}

A function call (calling/executing a function)
function_name() */

/* Syntax explaination:-
function: Is a reserved JavaScript keyword for creating a function.
name: name the function anything, but it cannot be a reserve JavaScript keyword.
parameter: parameter are values, to send to function when calling it.
return: the return keyword is how we pass things back out of our function.

Calling a function: inside the paranthesis put some arguments, Arguments are the values to fill parameter with. */

function square(number) {
  return number * number;
}
console.log(square(5));

// Declaring and Invoking functions

// There are a few different ways to deafine a function.

// 1) A function declaration (named function)
/* 
function name (params) {
  statement
}
*/

function cube(number) {
  return number * number * number;
}
console.log(cube(2));

// 2) A function expression
/* 
A function expression defines a name or an anonymous function.
An anonymous function is a function that has no name.
ex.
Setting the anonymous function to be equal to a variable.

const name = function (params) {
  statement
} 
*/

const sayHi = function (name) {
  console.log(`Hi, ${name}!`);
};
sayHi("Saish"); //invoke the function.
sayHi("Laukeek");

// 3) Arrow function (ES6)
/* 
Arrow function is a shorter syntax for writing funtion expression.
ex.
const name = (params) => {
  statement
}
Arrow function are the most modren way to create a JavaScript function. 
*/
/*
const sayHi = (name) => {
  console.log(`Hi, ${name}.`);
};
sayHi("Sanmay");
*/

// Invoking function
/*
A function is executed only when it is call, this process is also known as invocation.
Invoke a function by referencing the function name followed by an open and close parantheses.
ex.
const name = (params) => {
  statement
}
name(); // invoking/calling/execute 
*/

// Function Return
/* 
The return statement stops the execution of a function and returns a value.
Synatx:
return [expression]
The expression whose value is to be returned. If omitted, undefined is returned instead. 
*/

const add = (a, b) => {
  return a + b;
  return "Returned";
  // Whenever we have multiple return statements, only the first one is going to be executed.
};

const sum = add(2, 4);
console.log(sum);

// Arrow functions

/* Arrow functions are the most modern and most concise way of writting JavaScript functions. 
Arrow functions do not create their own 'this' value. 'this' is a special JavaScript reserve keyword. 
Syntax:-
const functionName = (parameter) => {
  statement
} */

const square1 = (number) => {
  return number * number;
};

const result1 = square1(10);
console.log(result1);

/* Arrow function also have a shorter way, whenever in arrow function have only one return statement remove
return keyword and pair of curly braces, and only have one parameter remove parantheses of parameter. */

const cube1 = (number) => number * number * number;

const result2 = cube1(2);
console.log(result2);

// Parameters vs Arguments
/* 
Parameters:- Parameters are used when defining a function.
Arguments:- Arguments are real values passed when making a function call. 
*/

const message = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};
message("Saish", 21);

// Default parameter
/* If we are not passing an argument for the parameter of age, that parameter automatically recieves the value of undefined. */

message("Pratik");
// Pratik is undefined years old.

// We always get something and not undefined then we use default parameter.

const message1 = (name = "User", age = "2") => {
  console.log(`${name} is ${age} years old.`);
};

message1("Jhon");
// Jhon is 2 years old.
