// Value vs Reference

// There are different data types are passed either by their value or by their reference.

/* Pass by Value:
                In JavaScript, Primitive data types are passed by copy of thier value. 
These primitive types are Numbers, Strings, Boolean, Null and Undefined. */

let a = 10;
let b = a; //now 'b' is 10

a = 20; //update variable 'a' 10 to 20

console.log(a); //20
console.log(b); //10

/* Explanation:
                The value of variable 'a' is copied and assigned to variable 'b'. This means
that these variables are separate with no relationship with each other. Due to this, changing 
one variable's value doesn't change the other. */

/* Pass by Reference:
                    A variable is assigned a non-primitive value (such as an object, an array, 
or a function), it is given a reference to that object's location in memory. */

const person = {
  firstName: "Saish",
  lastName: "Jagtap",
};

const otherPerson = person; //-> {firstName: 'Saish', lastName: 'Jagtap'}

person.firstName = "Adrian"; //-> Update the first name of the person 'Saish' to 'Adrian'

console.log(person); //{firstName: 'Adrian', lastName: 'Jagtap'}
console.log(otherPerson); //{firstName: 'Adrian', lastName: 'Jagtap'}

/* Explanation:
                The variable otherPerson doesn't actually contain the value {firstName: 'Saish', lastName: 'Jagtap'}, 
instead it points to a location in memory where that value is stored. */

// const otherPerson = person;
/* When a reference type value is copied to another variable, like otherPerson, the object is copied by reference 
instead of value. In simple term, person and otherPerson don't have their own copy of the value. They point to the
same location in memory. */

/* person.firstName = "Adrian";
   
   console.log(person);
   console.log(otherPerson); */

/* When a new item is pushed to person, the array in memory is modified, and as a result the variable otherPerson also
reflects that change. It never actually making a copy of a person object. It just make a variable that points to the
same location in the memory. */

// Example:- Same location in memory prove using equality check.

const object = {
  name: "square",
};

const otherObject = {
  name: "square",
};

console.log(object === otherObject); //FALSE

/* Explanation:
                object === otherObject is resolve to 'true', but that isn't the case. The reason is that object and 
otherObject contain identical objects they still point to two distinct objects stored in different locations in memory. */

const otherObject1 = object;

console.log(object === otherObject1); //TRUE

// Now, object and otherObject1 hold reference to the same location in memory, therefore conside to be equal.

// Shallow Clonning
// Eg.
const myObj1 = {
  name: "John",
  age: 21,
};
const myObj2 = myObj1;
myObj2.name = "Saish";

console.log(myObj1); //{name: 'Saish', age: 21} -> ❌ The original object get affected.
console.log(myObj2); //{name: 'Saish', age: 21} -> ✅

/* Explanation:
              Because objects are reference type (passed by reference) when use '=', the pointer to the memory address 
of myObj1 is copied to myObj2. Not the actual value is copied.
Reference type don't hold values they are pointer to the value in memory space. */

// To clone object: use spread operator or Object.assign().
// 1) Using Spread Operator (...):
const item = {
  name: "pen",
  qty: 20,
};

const newItem = { ...item };
newItem.qty = 40;

console.log(item); //{name: 'pen', qty: 20} -> ✅ Original object 'item' is not change.
console.log(newItem); //{name: 'pen', qty: 40} -> ✅

// 2) Using the Object.assign():
const item1 = {
  pen: 10,
  pencil: 20,
};
const item2 = Object.assign({}, item1);
item2.pen = 40;

console.log(item1); //{pen: 10, pencil: 20} -> ✅ Original object 'item1' is not change.
console.log(item2); //{pen: 40, pencil: 20} -> ✅

// To clone array: Using spread operator and Array.slice().
// 1) Using Spread Operator (...):
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];

numbers.push(6);

console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(newNumbers); //[1, 2, 3, 4, 5]

// 2) Using Array.slice():
const num = [10, 20, 30, 40, 50];
const newNum = num.slice();

num.push(60);

console.log(num); //[10, 20, 30, 40, 50, 60]
console.log(newNum); //[10, 20, 30, 40, 50]

// Spread Operator:- The reference to the initial object gets deleted.

// Deep Clonning
const user = {
  name: "Saish",
  car: {
    brand: "BMW",
    color: "Grey",
  },
};

// copy object using spread operator.

const newUser = { ...user };
// This removes the reference from the original object.

newUser.name = "Pratik";

console.log(user);
console.log(newUser);
// Chnaging the newUser name 'Saish' to 'Pratik'.

// Now changing the properties of Pratik's car.
newUser.car.color = "Black";

console.log(user.car); //{brand: 'BMW', color: 'black'}
console.log(newUser.car); //{brand: 'BMW', color: 'black'}
/* It changes the colour of Pratik's car as well as 'Saish's' car. 
They are both black. Although changed only the color of Pratik's car. 

This happens beacause, it only removed the reference from the outer 
object.

car is also an object, It also has its own reference.

Need to remove reference from the inner object as well.

Using the spread operator (but only works two levels deep).

const newUser = {...user, car:{...user.car}}; 

But, if it had more nested object need to spread everything. When, have 
deeply nested object, need to create a deep clone.

for an object to be a deep clone, it needs to destroy all the refernces.

There are two methods for deep clonning
1) JSON.stringify
2) JSON.parse 
*/

// 1) JSON.stringify: It converts a JavaScript object or any value to a string, all the references are destroyed.
const stringified = JSON.stringify(user);
console.log(stringified);
// {"name":"Saish","car":{"brand":"BMW","color":"black"}}

// 2) JSON.parse: Return stringify back to an object.
const newUser1 = JSON.parse(stringified);

// get an object, but an object that is a deep clone of the user object.

newUser1.name = "Prafulla";
newUser1.car.color = "White";

console.log(user);
/*  {name: 'Saish', car: {…}}
      car: {brand: 'BMW', color: 'Black'}
      name: "Saish"
*/
console.log(newUser1);
/*  {name: 'Prafulla', car: {…}}
      car: {brand: 'BMW', color: 'White'}
      name: "Prafulla" 
*/
