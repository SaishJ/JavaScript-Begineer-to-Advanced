// Objects in Detail

/* Objects are the most important data type and the building block of JavaScript. Objects are used to store collection of data in more complex entities. The object can
contain any data type of it. It can contain string, numbers or any other data types. Objects is an unorder collection of related data in form of key and value pairs. */

const person = {
  firstName: "Adrian",
  lastName: "Hajdin",
  age: 24,
};

console.log(person);

// Nested objects: Nested objects are the objects that are inside an another object.
// Example:-
const user1 = {
  firstName: "Saish",
  lastName: "Jagtap",
  age: 20,
  // nested object
  car: {
    brand: "Toyota",
    year: 2022,
    color: "grey",
  },
};

console.log(user1);

// Accessing, Adding and Updating properties of an Object.
/*
To access, add or update a property of an object used dot notation and bracket notation. It allows us to retrieve some values from an object.

Dot (.) Notation:
                The most common way of accessing object properties is through dot notation. Use a dot followed by property name to access its value.
Note:- This type of access works only if tyhe property names (keys) are 'strings' without any space. 
eg. */
const user2 = {
  name: "Saish",
  age: 21,
  "working location": "Mumbai",
};

console.log(user2.name); //Saish
console.log(user2.age); //21
// console.log(user2.working location)  -> it only works in bracket notation, otherwise get error

// Also change the value of a property
user2.age = 22; //updating the value
console.log(user2.age); //22

/*
Bracket ([]) Notation:
                      The most preferred way of accessing object values are through bracket notation.
Note:- This access to all types of keys which can be used in objects. Numbers, Strings (with or without space), even variables containing object property name can be 
used in this notation.
eg. */
const user3 = {
  name: "Adrain",
  age: 25,
  "working location": "Pune",
};

console.log(user3["name"]); //Adrain
console.log(user3["working location"]); //Pune

// Also update or change the property value
user3["name"] = "John";
console.log(user3["name"]); //John

// Object Methods
/* JavaScript objects may have property values that functions. These are referred to as object methods. Methods may be defined using anonymous arrow function 
expression, or with shorthand method syntax. */

const myObj = {
  method: () => {
    console.log("Method 1");
  },
  myMethod2: function () {
    console.log("Method 2");
  },
  myMethod3() {
    console.log("Method 3");
  },
};

// Use any one to create a method
myObj.method(); //Method 1
myObj.myMethod2(); //Method 2
myObj.myMethod3(); //Method 3

// Object Methods:
/* All objects in JavaScript the send from the parent object constructor and that object constructor has many built-in methods, use an access to make working with 
individual object straightforward. */

/* 1) Object.keys():
                    It creates an array containing the keys of an object. */
const employees = {
  boss: "Adrian",
  secretary: "Tom",
  sales: "John",
  accountant: "Jim",
};

const positions = Object.keys(employees);
console.log(positions); //['boss', 'secretary', 'sales', 'accountant']

/* It transformed all the keys of an object and put them in the array. */

/* 2) Object.values():
                      It creates an array containing the values of an object. */
const session = {
  id: 1,
  time: `21-March-2022`,
  device: "mobile",
  browser: "Firefox",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo); //[1, '21-March-2022', 'mobile', 'Firefox']

/* 3) Object.entries():
                      It creates a nested array of the key/value pairs of an object. */
const operatingSystem = {
  name: "ChromeOS",
  version: 99,
};

const entries = Object.entries(operatingSystem);
console.log(entries); //[Array(2), Array(2)]
// ['name', 'ChromeOS']
// ['version', 99]

/* These array contain each one has a key and the value stored in a new array.
Eg. name and ChromeOS stored in one array and version and 99 stored in another array. Each key and value pair get stored in a new array. */

/* Object.freeze():
                  It prevents modification to properties and values of an object and prevents properties from being added or removed from an object. */

// Eg. Never want to change a username.
const user = {
  username: "admin",
  password: 12345678,
};

const admin = Object.freeze(user);

admin.username = "saish";

console.log(admin); //{username: 'admin', password: 12345678}

// properties remain the same, that means that no one can change the username. 

/* 5) Object.seal():
                    It prevents new properties from being added to an object, but allows the modification of existing properties. */
const details = {
  username: "saish",
  password: 12345678,
};

const newUser = Object.seal(details);

newUser.password = "abcdef";
newUser.active = true;

console.log(newUser);

// The password changed from 12345678 to "abcdef", but the new active property wasn't added, because the object was sealed. 
