// There are two types of Data-Types in JavaScript.
// 1) Primitive Data Types
// 2) Complex Data Types

// 1) Primitive Data Types
// ▪ Numbers:- 5, 6, 7, etc.
// ▪ String:- "Hello Everyone", etc.
// ▪ Boolean:- Represent a logical entity and can have two values true and false.
// ▪ Nulll:- This type has only one value, null.
// ▪ Undefined:- A variable that has not been assigned a value is undefined.
// ▪ Symbol:- Used as an identifier for object properties.

// 2) Compex Data Types
// ▪ Object:- It has the most important data-type and forms the building block for modern JavaScript.

// The typrof Operator
/* You can use the typeof operator to find the data type of a JavaScript variable. */

// Comments: Comments are not interpreted by JavaScript engine.
// There are two type of Comments Singel Line Comment and Multi-Line Comment.
// Single Line Comment:- // (use two-forwarded slash)
// Multi-Line Comment:- /* */ (use forwarded slash-asterisk & end with asterisk forwarded slash)

// This is a Single Line Comment.

/* 
    This
    is
    a
    Multi-Line
    Comment.
*/

// String
// String is a data type used to represent text. Strings are simple fields of text.
// A String in JavaScript must be surrounded by quotes.
// There are 3 types of Strings.
// 1) Single Quotes
// 2) Double Quotes
// 3) backticks

// 1)Single Quotes:
const singleQuotes = "Hello!";
console.log(singleQuotes);

// 2) Double Quotes:
const doubleQuotes = "Hello!!";
console.log(doubleQuotes);

// Backticks:
/* Backticks provide extended functionality. They allow us to embed
variables and expression into a string by wrapping them into dollar sign
and then curly braces ${} */
const middleName = "Saish";
const backticks = `Hello, ${middleName}, welcome!`;
console.log(backticks);

// Numbers
/* JavaScript has only one type of number. Numbers can be written with or without decimals. */
let x = 3.14;
let y = 3;

console.log(x);
console.log(y);

/* Extra large or extra small numbers can be written with scientific (exponent) notation */
let a = 123e5; // 12300000
let b = 123e-5; // 0.00123

console.log(a);
console.log(b);

/* Unlike many other programming languages, JavaScript does not define different types 
of numbers, like integers, short, long, floating-point etc. */
const wholeNumber = 5;
const decimalNumber = 0.5;

console.log(wholeNumber);
console.log(decimalNumber);

/* There are many operations for numbers ex. multiplication, addition, substraction, devision. */

const firstNumber = 5;
const secondNumber = 10;

const add = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mul = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

console.log(add); //15
console.log(sub); //-5
console.log(mul); //50
console.log(div); //0.5 -> It is turned into a whole number down to to float or decimal number.

// Booleans
/* Booleans represent a logical entity and can only have two values. It can only be
true or false. */

// true - yes, correct, 1 -> in sometimes.
// false - no, incorrect, 0 -> in sometimes.

const age = 20;
console.log(age > 18); //true
console.log(age < 18); //false

// Null:
/* when we assign null to a variable, we are explicitly assigning a "nothing" or "empty" value to
it. 
For example, a name variable which stores the name of an user. At first, it doesn't have any data, so assigning to it.
Later add the data in name variable so we can reassign it. */

let name = null;
name = "Saish";

console.log(name); //Saish

// Undefined:
/* When we declare a variable without assigning any value to it, its value will be 
undefined by default. */

let z; //or let z = undefined.
console.log(z); //undefined

// Objects
/* Object is the most important data type and it forms the building block of the JavaScript.
Objects are used to store collection of data in more complex entities.
The object can contain any data types of it. It can contain string, numbers, or any other data types. */
const person = {
  name: "Saish", //String
  age: 21, //number
};

console.log(person);

// Also extract specific values from that object using the Dot Notation.
console.log(person.age);

// In JavaScript have other kinds of Object:
// ▪ Array
// ▪ Date

/* Array: To store order data collections. In array store multiple primitive types, 
it don't have key-value pairs, it have indexes. */
const arr = [1, 2, 3, 4];

console.log(arr);
console.log(typeof arr); //object

/* Date: It prints the current date and time. */
const date = new Date();

console.log(date);
console.log(typeof date); //object
