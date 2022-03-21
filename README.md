# Objects in Detail

## Introduction to Object

> An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type.

```javascript
object = {
  property1: value1,
  property2: value2,
  .
  .
  .
  propertN: valueN
}
```

## Accessing, Adding and Updating properties of an Object

> There are 2 types of accessing an object properties.

- **Dot Notation**
- **Bracket Notation**

- Dot Notation

  > The most common way of accessing object properties is through a dot notation. Use a `.` (dot) followed by the property name to access its value.

- Bracket Notation

  > The most preferred way of accessing object values are through bracket notation. It access all types of keys which can be used in objects _Eg. Numbers, string (with or without spaces), etc._

## Object Methods

> JavaScript **Objects** may have property values that are functions. These are referred to as object nethods. Methods may be defined using anonymous arrow function expressions, or with shorthand method syntax.

## Object Built-in-Methods

1. **Object.keys()**
2. **Object.values()**
3. **Object.entries()**
4. **Object.freeze()**
5. **Object.seal()**

- Object.keys()

  > It creates an array containing the keys of an object.

- Object.values()

  > It creates an array containing the values of an object.

- Object.entries()

  > It creates a nested array of the key/value pairs of an object.

- Object.freeze()

  > It prevents modification to properties and values of an object.

- Object.seal()

  > It prevents new properties from being added to an object, but allows the modification of existing properties.
