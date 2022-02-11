var variableName = "Welcome to Variables.";
console.log(variableName);

let name = "John";
name = "Saish";
console.log(name);

const box = "Box 1";
// box = "Box 2";   got error
// In const we cannot reassign variables.
console.log(box);

// block -> A block is a set of opening and closing curly brackets.

// var -> can be reassigned and are only available inside the function they're created in. Its function scoped.

// const -> cannot be reassigned and not accessible before they appear within the code. Its block scoped.

// let -> It can be reassigned but its similar to const i.e block scoped.
//        If variables are not crreated inside a function or block they are globally scoped.

// +-----------------------------------------------------------------------+
// | Keyword | scope                       | Redeclared (within the scope) |
// |---------|-----------------------------|-------------------------------|
// | var     | Global or Functional scope  | Yes                           |
// | let     | Block scope (inside {})     | No                            |
// | const   | Block scope (inside {})     | No                            |
// +-----------------------------------------------------------------------+

// Using var keyword (global or functional scope)
for (var i = 1; i <= 5; i++)
{
  console.log("Inside the loop: " +i);
}
console.log("Outside the loop: " +i);
// var i is a global variable. Therefore it can be accessed from both inside and outside the loop.

// Using let keyword (block scope)
for (let i = 1; i <= 5; i++)
{
  console.log("Inside the loop: " +i);
}
console.log("Outside the loop: " +i);
// var i is a block scope. ReferenceError occurs when access the variable outside the block. Therefore it can be accessed only inside the for loop i.e block where it is defined.
