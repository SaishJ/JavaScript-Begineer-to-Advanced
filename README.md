# Tricky Concepts

## Scope

> **Scope** simply allows to know where we have access to our variables. In simple words, **Scope** is the accessibility of variables, function and objects in some particular part of code during runtime.

### Types of Scope:

1. Global Scope
2. Local Scope
3. Block Scope (only with let and const)

- Global Scope:

  > Variables declared Globally (outside any function) have **Global Scope**. Global variables can be accessed from anywhere in a JavaScript program. Variables declared with `var`, `let`, and `const` are quite similar when declared outside a block. They all have **Global Scope**.

- Local / Function Scope:

  > Variables which are declared within a function, as well as the function parameters have **local scope**. That means they are only visible within that function.

- Block Scope:

  > `let` and `const` keywords provide **Block Scope** in JavaScript. Variables declared inside a `{}` block cannot be accessed from outside the block.

## Hoisting

> **Hoisting** is a JavaScript mechanism, where variables and function declaration are moved to the top of their scope before code execution.

## Closure

> A **Closure** defined as, the inner function has access to the outer function variable. In **JavaScript**, every time a **closure** is created with the creation of a **function**.
