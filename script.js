// Arrays in Detail

/* Array store order collection of data. The data-type of Array is an Object. */

const months = ["January", "February", "March", "April"];
console.log(months);

// retrieve a certain element in an array, use square brackets syntax [].
console.log(months[1]); //February

// replace elements
months[3] = "June";
console.log(months);

// Add new elements to an array
months[4] = "May";
console.log(months);

// Get the Total count of the elements in an array
console.log(months.length);

// Array can store any type of data.

const values = [
  "Saish", //string
  { name: "Saish" }, //object
  true, //boolean
  () => {
    //function
  },
];

console.log(values);

// Loop through an array to get all the elements one by one.

const empName = [
  "Prafulla",
  "Pratik",
  "Mayuresh",
  "Shivam",
  "Madhur",
  "Akarsh",
  "Yash",
];

for (i = 0; i < empName.length; i++) {
  console.log(empName[i]);
}

// Array Methods
const names = ["John", "Doe", "Mark", "Adrian"];

/* 1) Array Push:
                  The push() method adds new items to end of an array. 
*/
// names.push("Mosh");
// console.log(names); //['John', 'Doe', 'Mark', 'Adrian', 'Mosh']

/* 2) Array Pop:
                The pop() method removes the last element of an array. 
*/
// names.pop();
// console.log(names); //['John', 'Doe', 'Mark']

/* 3) Array Shift:
              The shift() method removes the first item of an array. 
*/
// names.shift();
// console.log(names); //['Doe', 'Mark', 'Adrian']

/* 4) Array Unshift:
                    The unshift() method adds new elements to the begining of an array. 
*/
// names.unshift("Mosh");
// console.log(names); //['Mosh', 'John', 'Doe', 'Mark', 'Adrian']

/* 5) Array Splice:
                  The splice() method allows to splice values into the new array.
Syntax:-
array.splice(firstParameter, secondParameter, third);

firstParameter:- determines where the new elements are placed.
secondParameter:- how many elements want to removed.
third:- values want to add in. 
*/
// names.splice(2, 0, "Tom", "Saish");
// console.log(names); //['John', 'Doe', 'Tom', 'Saish', 'Mark', 'Adrian', 'Mosh']

/* 6) Array Slice:
                  The slice() method copies certain part of an array into a newly created array. 
Syntax:-
array.slice(start, end) 
*/
// const namesList = names.slice(1, 3);
// console.log(namesList);

/* 7) Array Concat:
                  The concat() method concatenates (joins) two or more arrays. The concat() method returns a 
new array containing the joined arrays. */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combine = arr1.concat(arr2);
console.log(combine); //[1, 2, 3, 4, 5, 6]

/* 8) Array Join:
                The join() method returns an array as a string. Any seperator can be speciffied. The default is comma(,). */

// const joins1 = names.join(" ");
// console.log(joins1); //John Doe Mark Adrian

// const joins2 = names.join("-");
// console.log(joins2); //John-Doe-Mark-Adrian

/* 9) Array Length:
                  The length property returns the number of elements in an array. */

// const len = names.length;
// console.log(len); //4

/* 10) Array Reverse:
                    The reverse() method reversees the order of the elements in an array. */

// const reversed = names.reverse();
// console.log(reversed); //['Adrian', 'Mark', 'Doe', 'John']

/* 11) Array toString:
                      The toString() method returns a string with array values sperated by commas (,) */

// const string = names.toString();
// console.log(string); //John,Doe,Mark,Adrian

/* 12) Array includes:
                      The includes() method returns true if an array contains a specified value, it returns 
false if the value is not found. */

// const include = names.includes("Adrian");
// console.log(include); //true

/* 13) Array Sort:
              The sort() method sorts the elements of an array. It sorts an array alphabetically. */

// const sorts = names.sort();
// console.log(sorts); //['Adrian', 'Doe', 'John', 'Mark']

/* 14) Array indexOf:
                    The indexOf() method returns the first index (position) of a specified value. If the 
value is not found it returns -1. */

const result = names.indexOf("Adrian");
console.log(result); //3

/* 15) Array lastIndexOf:
                        The lastIndexOf() method returns the last index (position) of a specified value. 
If the value is not found it returns -1.  */

const cars = ["BMW", "Audi", "Ford", "Audi", "Waganor", "Ford"];
const lastIndex = cars.lastIndexOf("Ford");
console.log(lastIndex); //5

// Array forEach()
/* Thr forEach() method calls a function for each element in an array. 
Syntax:-
arrays.forEach(value, index, array) {
  //code block
} 
Also use Arrow function:-
arrays.forEach(value => console.log(value));

value (required):- The value of the current array element. 
Index (Optional):- The current elements index number.
Array (Optional):- The array object to which the current element belongs. 
*/
// Eg with onlny value parameter:-
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});
/* 1
2
3
4
5 */

// Eg with value and index parameter
const letters = ["a", "b", "c", "d", "e"];

letters.forEach((letter, index) => {
  console.log("Index: " + index + " Value: " + letter);
});
/* Index: 0 Value: a
   Index: 1 Value: b
   Index: 2 Value: c
   Index: 3 Value: d
   Index: 4 Value: e */

// Eg with array parameter.
numbers.forEach((number, index, array) => {
  console.log(array);
});
/* (5) [1, 2, 3, 4, 5]
   (5) [1, 2, 3, 4, 5]
   (5) [1, 2, 3, 4, 5]
   (5) [1, 2, 3, 4, 5]
   (5) [1, 2, 3, 4, 5] 

The array parameter is the array itself, It is optional and can be used if neccessary in various operations. 
Otherwise, if call it, it just printed as many times as the number of elements of the array. */

// Array Map
/* The map() method is used for creating a new array from an existing one, applying a function to each one 
of the elements of the first array. */

const movies = ["interstellar", "joker", "avengers", "justice league"];

const moviesCapitalized = movies.map((movie) => {
  return movie[0].toUpperCase() + movie.slice(1);
});
console.log(moviesCapitalized); //['Interstellar', 'Joker', 'Avengers', 'Justice league']

// Example 2
const inventory = [
  { name: "Saish", age: 20 },
  { name: "Pratik", age: 21 },
  { name: "Prafulla", age: 22 },
  { name: "Mayuresh", age: 23 },
];

const age = inventory.map((item) => item.age);
console.log(age); //[20, 21, 22, 23]

const name = inventory.map((item) => item.name);
console.log(name); //['Saish', 'Pratik', 'Prafulla', 'Mayuresh']

// Array filter
/* The filter() method is used for filtering elements by checking callback's return value, if true then 
it stays if not then get removed. */

// Eg.:- Print only positive numbers.
const numbers1 = [-5, 9, 15, -3, 30, -2];

const positiveNumbers = numbers1.filter((number) => number >= 0);
console.log(positiveNumbers); //[9, 15, 30]

// Eg2: A start up wants to reward the employee with 7 or more hours of overtime.
const employeesData = [
  { name: "Adrain", overtime: 10 },
  { name: "Shivam", overtime: 5 },
  { name: "John", overtime: 7 },
];

const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);
console.log(employeesToReward);
/* {name: 'Adrain', overtime: 10}
   {name: 'John', overtime: 7} */

// print the name of the employee
const employeeNames = employeesToReward.map((employee) => employee.name);
console.log(employeeNames); //['Adrain', 'John']

employeeNames.forEach((name) => console.log(`${name} received a reward.`));
/* Adrain received a reward.
   John received a reward. */

// Array Find
/* It finds an element in the array that matches a certain condition. The find() method returns 
the first value of thet satisfies the condition */

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const value = numbers2.find((number) => number > 5);
console.log(value); //6

// To find the first state that begins with the letter 'M'.
const states = [
  "Goa",
  "Maharashtra",
  "Punjab",
  "Madhya Pradesh",
  "Kerla",
  "Gujrat",
];

const state = states.find((state) => state.startsWith("M"));
console.log(state); //Maharashtra

// Array Some:
// It returns true if at least one element passes the test.

const arrays = [1, 2, 3, 4, 5];

console.log(arrays.some((number) => number > 3)); //true
//            OR
const greaterThan = arrays.some((number) => number > 3);
console.log(greaterThan); //true
//            OR
const isGreaterThan3 = (number) => number > 3;
console.log(arrays.some(isGreaterThan3)); //true

// Array Every
// It returns true only if all elements pass the test.

const num = [10, 20, 30, 40, 50];

console.log(num.every((element) => element > 30)); //false
//            OR
const greaterThan30 = num.every((element) => element > 30);
console.log(greaterThan30); //false
//            OR
const isGreaterThan0 = (element) => element > 0;
console.log(num.every(isGreaterThan0)); //true

// Array findIndex
/* It returns the index of the first element in the array that satisfies the provide testing 
function. It returns -1 if no match found. It does not change the original array. */

const ages = [3, 10, 18, 20, 23];

const result1 = ages.findIndex((age) => age > 18);
console.log(result1); //3

// Array reduce
/* The reduce() method returns a single value, the function accumulated result. It does not change 
the original array. */

// sum of the numbers
const num1 = [1, 2, 3];

const sum = num1.reduce((acc, val) => acc + val, 0);
console.log(sum); //6
/* 
Explanation:-
  acc=0, val=1 => 0+1=1 <= acc
first accumulator value is 0, because that is initial value, Then, the current value which is val.
and that is first element in an array. Then, increment value 0+1=1 the 1 is next accumulator value.
  acc=1, val=2 => 1+2=3 <= acc
In second iteration, the accumulator is 1, and the value is 2 -> because the second value in an 
array.
  Newly created value becomes the new accumulator. 
*/
// Ex2.
const items = [29, 12, 45, 35, 87, 110];

const total = items.reduce((total, price) => total + price, 0);
console.log(total); //318

// Array reduceRight
/* 
The reduceRight() method returns a single value the functions accumulated result. It works from right to left. 
It executes a reducer function for each array element. */

const num2 = [2, 45, 30, 100];

const sub = num2.reduceRight((total, num) => total - num);
console.log(sub); //23
