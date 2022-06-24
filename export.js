/* Export:
        Export a function or variable from any file. There are two types of exports: Named and Default. */

/* Named Exports:
        Create named exports two ways. In-line individually, or all at once at the 
bottom. */

// Individually:
// export const name = "Saish";
// export const age = "21";

// All at once at the bottom:
// const name1 = "Pratik";
// const age1 = 22;

// export { name1, age1 };

/* Default Exports:
        Only one default export in file. */
const message = () => {
  const name2 = "Prafulla";
  const age2 = 22;
  return name2 + " is " + age2 + "years old.";
};

export default message;
