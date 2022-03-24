# Value vs Reference

> There are different data types are passed either by their **value** or by their **reference**.

## Pass by Value

> In JavaScript, primitive data types are passed by copy of their value. These primitive types are Number, String, Boolean, Null and Undefined.

## Pass by Reference

> A variable is assigned a non-primitive value such as Object, Array, Function, etc. it is given a reference to that objects location in memory.

## Clonning Array

### One Level Deep

```javascript
// Shallow cloning - One level Deep

const original = [1, 2, 3, 4];

const newOg = [...original];

newOg.push(5);

console.log(original === newOg); //false
```

### Two Level Deep

```javascript
// Deep cloning - Two level Deep

const users = [
  { name: "John", age: 24 },

  { name: "Tom", age: 22 },
];

const newUser = JSON.parse(JSON.stringify(users));

console.log(users === newUser); //false
```
