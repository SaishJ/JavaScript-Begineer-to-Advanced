/* Arithmetic Operators: 
Arithmetic Operators are used to perform mathematical operations between a numeric operands. */

const a = 5;
const b = 10;

// Addition (+)
const add = a + b;
console.log(add);

// Subtraction (-)
const sub = a - b;
console.log(sub);

// Multiplication (*)
const multi = a * b;
console.log(multi);

// Division (/)
const div = a / b;
console.log(div);
// Note: JavaScript numbers can be float or decimal values as well.

// Exponent (**)
const expo = b ** a; // also do a ** b;
console.log(expo);

// Modulus (%)
const x = 13;
const y = 12;
const modu = x % y;
console.log(modu);

// Increment and Decrement
let i = 0;
i++; //Increment
i--; //Decrement
console.log(i);

/* Comparision Operator:
Comparision Operator compare two values and returned to boolean values
true or false. 
All Comparision and Equality operator returns boolean values. */
const num1 = 5;
const num2 = 10;

// Greater than
console.log(a > b);

//Greater than equal to
console.log(a >= b);

// Less than
console.log(a < b);

// Less than equal to
console.log(a <= b);

/* Remember: One Equal sign -> when assign a variable.
             Two Equal sign -> when check whether a value is equal or not. */

/* Equality Operators:
Test whether a value is equal or not */

// Is equal
console.log(a == b);

// Not equal
console.log(a != b);

// Strict equality
console.log(a === b);

// Strict Inequality
console.log(a !== b);

// Strict Equality vs Loose Equality
/*
    Strict Equality: The strict equality operator ensure that both oprand are of the same type and the same value.
    
    Loose Equality: The loose equality operators doesn't care about the type matching, if the types don't match, it wil convert the type of what we have on the right side to 
                    match what we have on the left side, and then it will only check if the values are equal.

    Equality operators returns boolean value. -> true or false
*/
console.log(1 == "1"); //loose equality -> true

console.log(20 === "20"); //strict equality -> false

// Logical Operator:
// There are 3 types of logical operator.
/*
  1) AND
  2) OR
  3) NOT
*/
// AND (&&) => All operands are true and if they are is returns true, if they are not returns false.
console.log(true && false)  //false

// OR (||) => At least one operand is true then it returns true.
console.log(true || false)  //true

// NOT (!) => Simply converts the boolean true to false and boolean false to be true.
console.log(!true)  //false

// Assignment Operator:
/* Assignment operator is = (equal sign) used for assigning values to variable. */

const num = 5;

/* Also Join the assignment operators with one of the arithmetic operators. */

// The += assignment operator adds a value to a variable.
let number = 5;
// number += 5;
// console.log(number); //10

// The -= assignment operator subtracts a value from a variable.
// number -= 5;
// console.log(number);    //0

// The *= assignment operator multiply a variable.
// number *= 5;
// console.log(number);    //25

// The /= assignment divides a value.
// number /= 5;
// console.log(number);    //1

// The addition assignment += can also be used with string.
let string = "Hello";
string += ", I am Saish";
console.log(string);
