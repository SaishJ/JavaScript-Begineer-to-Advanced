# ES6

## Classes:

> A Classes is a type of function, but instead of using the keyword `function` to initial it, use the keyword `class`, and the properties are assigned inside a `constructor()` method.

## Arrow function:

> Arrow functions allows to write shorter function syntax.

## Variables:

1. `var Keyword:`

   > Use `var` outside of a function, it belongs to the global scope. Use `var` inside of a function, it belongs to that function. Use var insside of a block, i.e. a for loop, the variables is still available outside of that block. `var` is a Global or Functional scope.

2. `let keyword:`

   > `let` is the block scoped version of `var`, and is limited to the block where it is defined. Use `let` inside of a block, i.e. a for loop, the variable is only available inside of thet loop. `let` is a Block scope.

3. `const keyword:`
   > `const` is a variable that once it has been created, its value can never change. `const` is a Block scope.

## Array Methods:

> There are many JavaScript Array methods. One of the most useful in React is the `.map()` array method. The `.map()` method allows to run a function on each item in the array, returning a new array as the result. In React, `map()` can be used to generate lists.

## Modules:

> JavaScript modules allows to break up code into seprate files. This makes it easier to mantain the code-base. ES Modules rely on the import and export statements.

- Export:

  > Export a function or variable from any file. There are two types of exports: Named and Default.

  > Named Exports:- Create named exports two ways. In-line individually, or all at once at the bottom.

  ```javascript
  // Individually:
  export const name = "Saish";
  ```

  ```javascript
  // All at once at the bottom:
  const name1 = "Pratik";
  const age1 = 22;

  export { name1, age1 };
  ```

  > Default Exports:- Only one default export in file.

  ```javascript
  const message = () => {
    const name2 = "Prafulla";
    const age2 = 22;
    return name2 + " is " + age2 + "years old.";
  };

  export default message;
  ```

- Import:

  > Import modules into a file in two ways, based on if they are named exports or default exports. Named exports must be destructured using curly braces. Default exports do not.

  > Import from Named Exports:-

  ```javascript
  import { name, age } from "./export";

  console.log("My name is " + name + "." + "I am " + age + "years old.");
  ```

  > Import from Default Exports:-

  ```javascript
  import message from "./export";

  console.log(message());
  ```
