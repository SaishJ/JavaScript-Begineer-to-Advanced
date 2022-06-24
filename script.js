// ES6

/* Classes:
      A Classes is a type of function, but instead of using the keyword function
to initial it, use the keyword class, and the properties are assigned inside a 
constructor() method. */

// Example 1:
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const myCar = new Car("BMW");

console.log(myCar); //Car {brand: 'BMW'}

// Example 2:
class Car1 {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

const myCar1 = new Car1("Ford");
console.log(myCar1.present()); //I have a Ford

/* Arrow Functions:
        Arrow functions allows to write shorter function syntax. */

// Without Arrow function
hello = function () {
  return "Hello World!";
};

console.log(hello);

// With Arrow function
hey = () => {
  return "Say Hi";
};

console.log(hey);

/* It gets shorter. If the function has only one statement, and 
the statement returns a value, you can remove the brackets and 
the return keyword. */

firstName = () => "Saish";
console.log(firstName);

// Arrow function with Parameter
lastName = (val) => "Saish " + val;
console.log(lastName("Jagtap"));

/* Variables (Var, Let, Const):
        Before ES6 there was only one way of defining variables: 
with the var keyword. If the variable did not define them, they would
be assigned to the global object. Unless in strict mode, then would
get an error if variables were undefined.

Now, with ES6, there are three ways of defining variables: var, let, const. */

// 1) var:
for (var i = 1; i <= 5; i++) {
  console.log("Inside the loop: " + i);
}
console.log("Outside the loop:" + i);

/* If var use outside of a function, it belongs to the global scope.
If var use inside of a function, it belongs to that function.
If var use inside of a block, i.e. a for loop, the variables is still available
outside of the block. */

// 2) let:
for (let j = 1; j <= 5; j++) {
  console.log("Inside the loop: " + j);
}
// console.log("Outside the loop: " + j);
/* let is the block scoped vaersion of var, and is limited to the block where it
is defined.
If let use inside of a block, i.e. a for loop, the variable is only available 
inside of that loop. */

// 3) const:
const x = 5.6;
// x = 5; //Uncaught TypeError: Assignment to constant variable.

console.log(x);
/* const is a variable that once it has been created, its value can never change.
It does not define a constant value. It defines a constant reference to a value.
const variable cannot:
  1) Reassign a constant value,
  2) Reassign a constant array,
  3) Reassign a constant object. 
const variable can:
  1) Change the element of constant array,
  2) Change the properties of constant */

/* Array Methods:
        There are many JavaScript Array methods. One of the most useful in React is
the .map() array method.
The .map() method allows to run a function on each item in the array, returning a new
array as the result.
In React, map() can be used to generate lists. */
const myArr = ["HTML", "CSS", "JS", "React"];
const myList = myArr.map((item) => console.log(item));

/* Destructuring:
        We have an Array or Object that we are working with, but we only need some of
the items contained in these. Destructuring makes it easy to extract only what is needed. */

// ◾ Destructuring Array:
// Before Destructuring:-
const vehicles = ["mustang", "f-150", "expedition"];
const car = vehicles[0];
const suv = vehicles[2];

console.log(car, suv); //mustang expedition
// With Destructuring:-
const names = ["Saish", "Shivam", "Pratik", "Mayuresh"];
const [name1, name2, name3, name4] = names;

console.log(name1); //Saish

// ◾ Destructuring Function:
function calculate(a, b) {
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;

  return [add, sub, mul, div];
}

const [add, sub, mul, div] = calculate(4, 6);

console.log(add); //10
console.log(mul); //24

// Destructuring Objects:
// Before Destructuring:-
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2022,
  color: "red",
};

myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
  const message =
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    ".";

  console.log(message); //My car is a red Ford Mustang.
}

// With Destructuring:-
const user = {
  name: "Saish",
  age: "21",
};

userDetail(user);

function userDetail({ name, age }) {
  const userName = "My name is " + name + ".";

  console.log(userName); //My name is Saish.
}

/* Modules:
        JavaScript modules allows to break up code into seprate files. This makes it
easier to mantain the code-base. ES Modules rely on the import and export statements. */

/* Export:
        Export a function or variable from any file.
Example:- Create a file named person.js
There are two types of exports: Named and Default. */

/* Import:
        Import modules into a file in two ways, based on if they are named exports or 
default exports. Named exports must be destructured using curly braces. 
Default exports do not. */

/* Spread Operator:
        The JavaScript Spread Operator (...) allows to quickly copy all or part of an
existing array or object into another array or object. */
const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numbersCombined = [...numberOne, ...numberTwo];

console.log(numbersCombined); //[1, 2, 3, 4, 5, 6]

/* The Spread Operator is often used in combination with dstructuring.
Example:- Assign the first and second items from numbers to variables and put the rest
in an array. */
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one); //1
console.log(two); //2
console.log(rest); //[3, 4, 5, 6]

// Also use the Spread Operator with objects:
const book1 = {
  name: "DBMS",
  author: "SJ",
  price: 200,
};

const book2 = {
  name: "JavaScript",
  author: "Adrian",
};

const books = { ...book1, ...book2 };

console.log(books);

/* The properties that did not match were combined, but the property that did match, 
like author, was overwritten by the last object that was passed, book2. The resulting 
author is now 'Adrian'. */
