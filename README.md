# 'classes', 'new' and 'this' keyword

## The 'new' keyword:

> The `new` keyword crreate an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

- Syntax:

```javascript
new constructor(arguments);
```

## The 'this' keyword:

> The `this` keyword refers to an object. Which object depends on how `this` is being used or called. The `this` keyword refers to different objects depending on how it is used.

1. In an **object** method, `this` refers to the **object**.
2. In an **alone**, `this` refers to the **global object**.
3. In a **function**, `this` refers to the **global object**.
4. In a **function**, in **strict** mode, `this` is **undefined**.
5. In an event, `this` refers to the **element** that received the event.
6. Method like `call()`, `apply()`, and `bind()` -> `this` refers to **any object**.

## Classes

> Classes are template for creating objects. They encapsulate data with code to work on that data. Classes in JavaScript are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

- Syntax:

```javascript
class ClassName {
    constructor() { ... }
}
```
