/* Import:
        Import modules into a file in two ways, based on if they are named exports or 
default exports. Named exports must be destructured using curly braces. 
Default exports do not. */

/* Import from Named Exports:
        Import named exports from the file export.js */

// import { name1, age1 } from "./export";
// console.log("My name is " + name1 + "." + "I am " + age1);

/* Import from Default Exports:
        Import a default export from the file export.js */

import message from "./export";
console.log(message());
