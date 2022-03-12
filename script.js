// Logic and Control Flow
/*
    ▪ IF statement
    ▪ Truthy and Falsy
    ▪ Switch statement
    ▪ Ternary operator
*/

// IF statement
/* Use if statement to specify a block of code to be executed, if a specified condition is true.
Syntax: if (condition) {
            code to be executed if the condition is true
        } 
*/
/* const age = 24;
if (age > 18) {
  console.log("Age is greater than 18.");
} */

// Else statement
/* Use else statement to specify a block of code to be executed if the condition is false.
Syntax: if (condition) {
            code to be executed if the condition is true
        } else {
            code to be executed if the condiyion is false
        } 
*/
const temprature = 30;
if (temprature > 28) {
  console.log("Sunny");
} else {
  console.log("Overcast");
}

// If - else if - else statement
/* Use else if statement to specify a new condition to test, if the first condition is false
Syntax: if (condition1) {
            code to be executed if the condition is true
        } else if (condition2) {
            code to be executed if the condition1 is false 
            and condition2 is true
        } else {
            code to be executed if the 
            condition1 is false and
            condition2 is false
        } 
*/
const weather = 18;
if (weather > 25) {
  console.log("Sunny");
} else if (weather > 22) {
  console.log("Overcast");
} else {
  console.log("Cold");
}

// Truthy and Falsy
/* 
Truthy expression always evaluate to boolean true and falsy evaluate to boolean false.

When a value is evaluated in a boolean context, if the value is true it is called a truthy and if it is
false it is called a falsy.
There are 6 falsy values:
false
0 (zero)
"", '', `` (empty strings)
null
undefined
NaN (Not a number)

Truthy:
Everything that is not falsy is truthy. */

if (5) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// Output -> Truthy

// Logical Operators
/* Logical operators are used to combine two or more condition. JavaScript includes three logical operators
1) OR (||)
2) AND (&&)
3) NOT (!)
Logical operators are often used as a condition and if statements. */
// AND operator example:
// Example of PUB

// isCool and is above the age of 18
const age = 19;
const isCool = true;

if (isCool && age > 18) {
  console.log("You may enter!");
} else {
  console.log("You cannot enter.");
}

// OR operator example:
const day = "sunday";

if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend.");
} else {
  console.log("Do some work");
}

// NOT operator example:
console.log(!true); //false

console.log(!false); //true

// Switch statement
/* The switch statement is used to perform different actions based on 
different conditions.
Syntax: switch(expression) {
          case x:
            code block
            break;
          case y:
            code block
            break;
          default:
            code block
        }
It works like:
1) The switch expression is evaluated once.
2) The value of the expression is compared with the value of each case.
3) If there is a match, the associated block of code is executed.
4) If there is no match, the default code block is executed. 
The break keyword:-
JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside 
the switch block.
The default keyword:-
The default keyword specifies the code to run if there is no case match.
*/

const superHero = "Captain America";

switch (superHero) {
  case "Iron Man":
    console.log("I am Iron Man...");
    break;
  case "Thor":
    console.log("That is my hammer!");
    break;
  case "Captain America":
    console.log("Never give up");
    break;
  case "Black Widow":
    console.log("One shot, one kill");
    break;
  default:
    console.log("Enter a valid superhero name.");
}

// Ternary operator
/* This operator is frequently used as an alternative to an if...else statement.
Syntax:
consition ? exprIfTrue : exprIfFalse 

condition:- An expression whose value is used as a condition.
exprIfTrue:- An expression which is executed if the condition is truthy.
exprIfFalse:- An expresssion which is executed if the condition is falsy. */

// To check the eligibility to vote.
const age1 = 20;
age1 >= 18
  ? console.log("You are eligible to vote.")
  : console.log("You are not eligible to vote yet");

// While loop
/* The while loop loops through a block of code as long as a specified condition is true.
Syntax:
while (condition) {
  code block to be executed
} */

// print 0 to 9 numbers in console.
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// For loop
/* A for loop repeats until a specified condition evaluates to false. The purpose of a for loop
is when you want repeat an condition multiple times.
Syntax:
for ([initialization]; [condition]; [final-expression]){
  statement
}

initialization:- Declare or initialize varaible ex. let i = 0
condtion:- add condition ex. i < 10
final-expression:- increment or decrement a value ex. i++ or i-- */

// print hello world 5 times in console.
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// do...while Loop
/* do...while loop are very similar to while loop.
The do...while statements defines a code block to be executed once, and repeated as long as condition is true.
Syntax:-
let i = 0;  //initialExpression
do {
    code block to be executed
}
while(condition) 
*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// for...in Loop
/* The for...in statements iterates (loops) over the properties of an object over element in an arrray.
Syntax:-
for (key in object) {
  code block to be executed
} */

// Iterate over the properties of an object.
const person = {
  name: "Saish",
  age: 21,
};

for (let key in person) {
  console.log(key);
}

// Iterate over the value of an array.
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);
}

// for...of Loop
/* for...of loop are similar to for...in loop.
The for...of statements iterates (loops) over the values of any iterable.
Syntax:-
for (variables of iterable) {
  code block to be executed
} */

// Iterate over the values of an array
const names = ["Pratik", "Prafulla", "Mayuresh"];

for (let list of names) {
  console.log(list);
}
