// Strings in Detail

/* There are 3 ways to create Strings. */
// 1) Single quote:-
const single = "This is a string.";
console.log(single);

// 2) Double quote:-
const double = "This is a string.";
console.log(double);

// 3) Backticks:-
const backtick = `This is a string.`;
console.log(backtick);

/* Strings created with Single or Double quotes are the same, call them simple or basic strings, they simply represents static or
textual values. */

/* Strings created with backticks provide extended functionality, they are dynamic. They allow us to execute real JavaScript logic
inside of curly braces ${}.
Everything that put in between the dollar sign and curly braces ${}, it's not simply taken for granted. It is evaluated as 
JavaScript logic. */
const add = `${2 + 2}`;
console.log(add); //4

// Also make function call inside backticks strings.

const sum = (a, b) => a + b;
const total = `The sum is ${sum(2, 10)}`;
console.log(total);

// let text = "We are the so-called "Viking" from the north.";
/* The string text will be chopped to "We are the so-called".
The solution to avoid this problem is to use the backslash escape character.
The backslash (\) escape character turns special characters into string characters.
*/

let text = 'We are the so-called "Vikings" from the north.';
console.log(text);

const greeting = 'Hi, I\'m John, but people call me "Johny".';
console.log(greeting);

// String Length and Basic property

// To find the length of a string, use built-in length property.
const name = "Saish";

console.log(name.length); //5

// Get a certain character of string, use square brackets syntax to access a certain position of character.
const fullName = "Saish Ajay Jagatp";
const firstLetter = fullName[4]; //h

console.log(firstLetter);

// Change String Case
// In JavaScript two simple methods for changing the character case. (lowercase and uppercase)

const mixedCaseString = "Hello!, How are you?";

const lowerCaseString = mixedCaseString.toLowerCase();
const upperCaseString = mixedCaseString.toUpperCase();

console.log(lowerCaseString); //hello!, how are you?
console.log(upperCaseString); //HELLO!, HOW ARE YOU?

// Searching for a Substring

const hobbies = "I love HTML, CSS, JavaScript, Bootstrap, JavaScript.";

// includes(): The includes() method returns true if a string contains a specified string, otherwise it returns false.
const include = hobbies.includes("HTML");
console.log(include); //true

/* indexOf(): The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() 
method returns -1 if the value is not found. */
const index = hobbies.indexOf("CSS");
console.log(index); //13

/* lastIndexOf(): The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
It searches the string from the end to the beginning. It returns -1 if the value is not found. */
const lastIndex = hobbies.lastIndexOf("JavaScript");
console.log(lastIndex); //41

// startsWith(): The startsWith() method returns true if string starts with specified string. Otherwise it returns false.
const startWith = hobbies.startsWith("love");
console.log(startWith); //false

// endsWith(): The endsWith() method returns true if a string ends with a specified string, otherwise it returns false.
const endWith = hobbies.endsWith("JavaScript.");
console.log(endWith); //true

// Getting a Substring
/* To get the sustring of a string the best method to use it called slice. slice() method returns the sub-string of a string.
Syntax: 
string.slice(start, end);
start:- Required, The start position (First character is 0).
end:- Optional, The end position. Default is string length.
*/
const example = "hotdog";
const hot = example.slice(0, 3);

console.log(hot); //hot

const dog = example.slice(3);
console.log(dog); //dog

// Split a String
/* The split() method splits a string into an array of substring.
split(''):- It returns an array of character of a string.
split(' '):- It returns an array of words of a string. The string is split between words. 
*/
const exampleString = "The quick brown fox jumps over the lazy dog.";

const character = exampleString.split("");
console.log(character);

const words = exampleString.split(" ");
console.log(words);

// Repeat and Trim a string

// repeat()
// The repeat() method returns a string with a number of copies of a string.
const dogSays = "woof";
const repeatString = dogSays.repeat(5);

console.log(repeatString);

// trim()
// The trim() method removes whitespace from both sides of a string.
const email = "   saishj@gmail.com   ";
const trimString = email.trim();

console.log(trimString);

// Exercise
const guestList = "Our guests are: prafulla, pratik, shivam, mayuresh";

// Get a length of the string. Store it in a variable called length.
const length = guestList.length;
console.log(length);

// Uppercase the entire string. Store the reult in a variable called uppercasedGuestList.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

/* Check whether 'PRAFULLA' is on the uppercasedGuestList. Store the answer in a variable called 
isPrafullaOnTheList. The data type of the variable must be a boolean. */
const isPrafullaOnTheList = uppercasedGuestList.includes("PRAFULLA");
console.log(isPrafullaOnTheList);

/* Create a substring that only contains the following: 'PRAFULLA, PRATIK, SHIVAM, MAYURESH'. 
Store the answer in a variable called substringGuests. */
const substringGuests = uppercasedGuestList.slice(16);
console.log(substringGuests);

/* Out of a substring just created. Create an array of names of prople that are on the list.
Store that array in a variable called guests. */
const guests = substringGuests.split(",");
console.log(guests);

// charAt()
// The charAt() method returns the character at a specified index (position) in a string.
const text1 = "Hello!, World";
const char = text1.charAt(4);

console.log(char); //o

// replace()
/* string.replace(substr, newSubstr);
It returns  a new string with a substring (substr) replaced by a new one (newSubstr). */
const password = "sj123";
const newPassword = password.replace("sj123", "saish123");

console.log(newPassword);

// substr()
/* string.substr(start, length) 
It returns a position of the string, starting at the specified index and extending for 
a given number. */
const text2 = "Hello!, world";
const result = text2.substr(3, 6);

console.log(result);
