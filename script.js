// Classes, this and new keyword

/* The "new" keyword:
               The 'new' keyword create an instances of a user-defined object type or of one of the
built-in object types that has a constructor function.

Syntax:- 
      new constructor(arguments)
◾ constructor:- A class or function that specifies the type of object instance.
◾ arguments:- A list of values that the constructor will be called with.

Description:-
            The 'new' keyword does the following things:
1) Creates a blank, plain JavaScript object.
2) Adds a property to the new object that takes links to the constructor functions property object. */

// Ex.:
const myDate = new Date();
console.log(myDate); //Tue Apr 05 2022 20:35:06 GMT+0530 (India Standard Time)
console.log(myDate.getFullYear()); //2022

// JavaScript also provides constructor functions for many built-in objects, like the 'Date' object.

/* The "this" keyword:
Ex.
const person = {
      firstName: "Saish",
      lastName: "Jagtap",
      id: "1",
      fullName: function() {
            return this.firstName + " " + this.lastName;
      }
}
What is this ?
The "this" keyword refers to an object. Which object depends on how 'this' is being used or called (invoked).
The 'this' keyword refers to different objects depending on how it is used.

▪ In an object method, "this" refers to the object.
▪ Alone, "this" refers to the global object.
▪ In a function, "this" refers to the global object.
▪ In a function, in strict mode, "this" is undefined.
▪ In an event, "this" refers to the element that received the event.
▪ Method like call(), apply(), and bind() can refer "this" to any object.

Note:-
      "this" is not a variable. It is keyword. The value of "this" cannot be change.

1) "this" in a method:
                  When "this" used in an object method, it refers to the object. In an above example, "this" refers
to the person object. Because the fullName method is a method of the person object.
fullName: function() {
      return this.firstName + " " + this.lastName;
}

2) "this" Alone:
            When used alone, "this" refers to the global object. Because "this" is running in the global scope.
let x = this;
In strict mode, when used alone, "this" refers to the global object.
"use strict"
let x = this;

3) "this" in a Function (Default):
                  In a function, the global object is the default binding for "this". In a browser window the global 
object is [object Window]:
function myFunction() {
      return this;
}

4) "this" in a Function (strict):
                  JavaScript strict mode does not allow default binding, When used in a function, in strict mode, 
this is undefined.
"use strict"
function myFunction() {
      return this;
}

5) "this" in Event Handlers:
                  In HTML event handlers, "this" refers to the HTML element that received the event.
<button onclick="this.style.display = 'none'">
      Click to Remove Me
</button> */
// Ex.:
const person = {
  firstName: "Saish",
  lastName: "Jagtap",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); //Saish Jagtap

/* "classes":
            JavaScript classes are templates for JavaScript Objects.
Syntax:-
      Use the keyword class to create a class. Always add a method named constructor()
      
      class ClassName {
            constructor() { ... }
      }
Ex.:
      class Car {
            constructor(name, year) {
                  this.name = name;
                  this.year = year;
            }
      }
It creates a class named "Car". The class has two initial properties: "name" and "year".

const myCar1 = new Car('Audi', 2016);
const myCar2 = new Car('Ford', 2020);

Use the class to create objects. It uses the Car class to create two Car objects.

▪ The Constructor Method:
                        This is special method:-
1) It has the exact name "constructor".
2) It is executed automatically when a new object is created.
3) It is used to initialize object properties.

If a constructor method is not define, JavaScript will add an empty constructor method.

▪ The Class Method:
                  Class methods are creeated with the same syntax as object methods.
Use the keyword class to create a class. Always add a constructor() method. Then add any number of methods:

class ClassName {
      constructor() {
            method1() { ... }
            method2() { ... }
            method3() { ... }
      }
} */
// Ex.:
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Audi", 2016);

console.log(myCar);
/* Car {name: 'Audi', year: 2016}
   name: "Audi"
   year: 2016 */
