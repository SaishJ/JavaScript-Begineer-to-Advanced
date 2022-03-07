// Tricky Concepts

// Scope
/* Global Scope: 
                Scope refers to the visibility of variables. Variables which are defined outside of a function block have 
                Global Scope. This means, they can be seen everywhere in code. */

// ex.

for (var i = 1; i <= 5; i++) {
  console.log("Inside the loop: " + i);
}
console.log("Outside the loop: " + i);

/* explaination:- var i is a global variable. Therefore it can be accessed from both inside and outside the loop. */

/* Local/Function Scope:
                        Variables which are declared within a function, as well as the function parameters, have 
                        local scope. That means they are only visible within that function. */

// example: A function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
// console.log(loc);

/* explaination:- The myTest() function call will display the string "foo" in the console. The console.log(loc) line
(outside of the myTest function) will throw an error, as loc is not defined outside of the function. */

/* Block Scope: 'let' and 'const' proide Bllock Scope in JavaScript. Variables declared inside a { } block cannot be 
accessed from outside the block. */

// ex:

for (let i = 1; i <= 5; i++) {
  console.log("Inside the loop: " + i);
}
console.log("Outside the loop: " + i);

/* explaination:- let i is a block scope, ReferenceError occurs when access the variable outside the block. 
Therefore it can be accessed only inside the for loop i.e. block where it is defined. */

// Hoisting

// ex1.
console.log(age);
var age = 21; //undefined

/* Explaination:- 
Why undefined should'nt it say name, doesn't exist (ReferenceError)
=> It's because of hoisting.
During the creation phase JE (JavaScript Engine) sees this variable (name) and allocates memory for it 
and keeps undefined as its value.
So since hoisting happens in creation phase there is already a variable name in the memory with value 
undefined.
So during execution phase when it runs the file from top to bottom (this is what it sees.) (not physically)

var name = undefined;   -> this is hoisting
console.log(name);
var name = "Saish"; 

NOTE:- Variables are partially hoisted.
Meaning:- They are allocated memory but not assigned actual value, what we give. They are simply 
assigned undefined.
*/

// Closure

/* A Closure has the three scope chains listed as follows:
1) Access to its own scope.
2) Access to the variables of the outer function.
3) Access to the global variables. */

function myFunc() {
  var a = 5; // 'a' is the local variable created by the myFunc()

  function innerFunc() {
    // the innerFunc() is the inner function, or a closure.
    return a;
  }
  return innerFunc();
}

const output = myFunc();
console.log(output);

/* Explaination:-
                  There are two functions: myFunc() and innerFunc().
The function myFunc() creates the local variable 'a'. The innerfunction innerFun() is only present in the body 
of myFunc(). The inner function access the outer function variable, so the function innerFunc() access the 
variable 'a' which is declared in myFunc().
        This is the closure in which the inner function have access to the global variable and outer function 
variables. */
