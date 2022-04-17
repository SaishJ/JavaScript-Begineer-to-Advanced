# Asynchronous JavaScript

## Intervals and Timers

### setInterval()

> The `setInterval()` method calls a function at specified intervals (in millisecond). The `setInterval()` method continues calling the function until the `clearInterval()` is called, or the window is closed.

### clearInterval()

> The `clearInterval()` method clears a timer set with the `setInterval()` method.

### setTimeout()

> The `setTimeout()` method calls a function after a number of milliseconds. The `setTimeout()` a executed only once.

### clearTimeout()

> The `clearTimeout()` method clears a timer set with the `setTimeout()` method.

## Difference between Asynchronous and Synchronous

### Synchronous JavaScript

> Synchronous JavaScript is one in which the code is executed line by line and their tasks are completed instantly, i.e. there is no time delay in the completion of the tasks for those lines of code.

### Asynchronous JavaScript

> Asynchronous JavaScript is one in which some lines of code take time to run. These tasks are run in the background while the JavaScript engine keeps executing other lines of code. When the result of the asynchronous tasks gets available, is then used in the program.

## Callbacks

> A **Callback** is a function that is to be executed after _another function_ has _finished executing_. Any function that is passed as an _argument_ is called a **Callback** function.

## Callback Helll

> This is a big issued caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other function get affected.

## Promises

> Promises are objects that either return the successfully fetched data, or the error. **Promises** are alternative to callbacks for delivering the result of asynchronous computation. They are more readable as compared to **Callbacks**.

## Async/Await

> The keyword **async** is used to make a function asynchronous. The **await** keyword will ask the execution to wait until the defined task gets executed. It allows the use of **await** keyword inside the functions with **async** keyword.
