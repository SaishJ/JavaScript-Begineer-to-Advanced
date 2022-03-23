// Date and Math Object

// JavaScript Date Objects
/* Date objects are created with the new Date() constructor.
There are 4 ways to create a new date object. */

// 1) new Date(): Creates a new date object with the current date and time.
const date = new Date();
console.log(date); //Tue Mar 22 2022 12:21:27 GMT+0530 (India Standard Time)

/* 2) new Date(year, month, ...): Creates a new date object with a specified date and time.
7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order): */
const specificDate = new Date(2022, 02, 29);
console.log(specificDate); //Tue Mar 29 2022 00:00:00 GMT+0530 (India Standard Time)

// 3) new Date(dateString): Creates a new date object from a date string.
const dateString = new Date("March 29, 2022 12:12:12");
console.log(dateString); //Tue Mar 29 2022 12:12:12 GMT+0530 (India Standard Time)

// 4) new Date(milliseconds): Creates a new date object as zero time plus milliseconds.
const milisec = new Date(0);
console.log(milisec); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
const plus = new Date(100000000000);
console.log(plus); //Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)

// January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
const minus = new Date(-100000000000);
console.log(minus); //Mon Oct 31 1966 19:43:20 GMT+0530 (India Standard Time)

// One day (24 hours) is 86 400 000 milliseconds.
const oneday = new Date(86400000);
console.log(oneday); //Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)

// JavaScript Date Input
/* There are generally 3 types of JavaScript date input fromats.
ISO Date -> "2022-03-22" (The International Standard)
Short Date -> "03/22/2022"
Long Date -> "Mar 22 2022" or "22 Mar 2022" */

// Get Date Methods

const newDate = new Date();
// 1) getFullYear(): Get the year as a four digit number (yyyy).
const fullYear = newDate.getFullYear();
console.log(fullYear); //2022
//OR
console.log(newDate.getFullYear()); //2022

// 2) getMonth(): Get the month as a number (0-11).
console.log(newDate.getMonth()); //2

// 3) getDate(): Get the date as a number (1-31).
console.log(newDate.getDate()); //22

// 4) getHours(): Get the hour (0-23).
console.log(newDate.getHours()); //12

// 5) getMinutes(): Get the minute (0-59).
console.log(newDate.getMinutes()); //56

// 6) getTime(): Get the time (miliiseconds since 1 January 1970).
console.log(newDate.getTime()); //1647934055700

// 7) getDay(): Get the weekday as a number (0-6).
console.log(newDate.getDay()); //2

// 8) Date.now(): Get the time ECMAScript5. It returns the number of milliseconds since 1 January 1970.
const date1 = Date.now();
console.log(date1); //1647934435765

// 9) getSeconds(): Get the second (0-59).
console.log(newDate.getSeconds()); //56

// 10) getMilliseconds(): Get the millisecond (0-999).
console.log(newDate.getMilliseconds()); //965

// UTC Date Methods
// UTC date methods are used for working with UTC dates (Universal Time Zone dates).

// 1) getUTCDate(): Returns the date of the month according to universal time (from 1-31).
console.log(newDate.getUTCDate()); //22

// 2) getUTCDay(): Returns the day of the week according to universal time (from 0-6).
console.log(newDate.getUTCDay()); //2

// 3) getUTCFullYear(): Returns the year, according to universal time.
console.log(newDate.getUTCFullYear()); //2022

// 4) getUTCMonth(): Returns the month according to universal time (from 0-11).
console.log(newDate.getUTCMonth()); //2

// 5) getUTCHours(): Returns the hour according to universal time (from 0-23).
console.log(newDate.getUTCHours()); //8

// 6) getUTCMinutes(): Returns the minutes, according to universal time (from 0-59).
console.log(newDate.getUTCMinutes()); //25

// 7) getUTCSeconds(): Returns the seconds, according to universal time (from 0-59).
console.log(newDate.getUTCSeconds()); //29

// 8) getUTCMilliseconds(): Returns the milliseconds, according to universal time (from 0-999).
console.log(newDate.getUTCMilliseconds()); //938

// Math Object
/* The JavaScript Math object allows to perform mathematical tasks on numbers. The Math object has no constructor. */

// 1) Math.abs(): Returns the absolute (positive) value of x.
const absolute = Math.abs(-7.2);
console.log(absolute); //7.2

// 2) Math.acos(): Returns the arccosine of a number as a value between 0 and PI radians.
const cosine = Math.acos(0.2);
console.log(cosine); //1.369438406004566

// 3) Math.acosh(): Returns the hyperbolic arccosine of a number.
const arccosine = Math.acosh(2);
console.log(arccosine); //1.3169578969248166

// 4) Math.asin(): Returns the arcsine of a number as a value between -PI/2 and PI/2 radians.
const arcsine = Math.asin(0.5);
console.log(arcsine); //0.5235987755982989

// 5) Math.asinh(): Returns the hyperbolic arcsine of a number.
const sinehyperbolic = Math.asinh(1);
console.log(sinehyperbolic); //0.881373587019543

// 6) Math.atan(): Returns the arctangent of a number as a value between -PI/2 and PI/2 radians.
const tangent = Math.atan(2);
console.log(tangent); //1.1071487177940904

// 7) Math.atan2(y, x): Returns the arctangent of the quotient of its arguments.
const num = Math.atan2(10, 4);
console.log(num); //1.1902899496825317

// 8) Math.atanh(x): Returns the hyperbolic arctangent of a number.
const x = Math.atanh(0.5);
console.log(x); //0.5493061443340548

// 9) cbrt(x): Returns the cubic root of a number.
const cuberoot = Math.cbrt(125);
console.log(cuberoot); //5

// 10) ceil(x): The Math.ceil() method rounds a number upwards to the nearest integer, and returns the result.
const upward = Math.ceil(1.49);
console.log(upward); //2

// 11) cos(x): Returns the cosine of a number.
const num1 = Math.cos(3);
console.log(num1); //-0.9899924966004454

// 12) cosh(x): Returns the hyperbolic cosine of a number.
const num2 = Math.cosh(3);
console.log(num2); //10.067661995777765

// 13) exp(x): Returns the value of E^x, where E is Euler's number (approximately 2.7183).
const euler = Math.exp(3);
console.log(euler); //20.085536923187668

// 14) floor(x): This method rounds a number downwards to the nearest integer.
const first = Math.floor(0.6);
console.log(first); //0

// 15) log(x): Returns the natural logarithm (base E) of a number.
const logarithm = Math.log(2);
console.log(logarithm); //0.6931471805599453

// 16) max(x, y, z, ..., n): Returns the number with heighest value.
const heighest = Math.max(5, 10);
console.log(heighest); //10

// 17) min(x, y, z, ..., n): Returns the number with the lowest value.
const lowest = Math.min(5, 10);
console.log(lowest); //5

// 18) pow(x, y): Returns the value of x to the power of y (x^y).
const power = Math.pow(2, 2);
console.log(power); //4

// 19) random(): Returns the random number betwen 0 and 1.
const randomNumber = Math.random();
console.log(randomNumber); //0.6669267798976142

// 20) round(x): This method rounds a number to the nearest integer.
// Note: 2.49 will be rounded down (2) and 2,5 will be rounded up (3).
const roundNumber = Math.round(2.5);
console.log(roundNumber); //3

// 21) sign(x): Returns whether a number is negative, positive or zero.
/* If the number is positive, this method return 1.
If the number is negative, it returns -1.
If the number is zero, it returns 0. */
const num3 = Math.sign(3);
console.log(num3); //1

// 22) sin(x): Returns the sine of x (x is in radians).
const sine = Math.sin(3);
console.log(sine); //0.1411200080598672

// 23) sinh(x): Returns the hyperbolic sine of a number.
const num4 = Math.sinh(4);
console.log(num4); //27.28991719712775

// 24) sqrt(x): Returns the square root of a number.
const squareRoot = Math.sqrt(3);
console.log(squareRoot); //1.7320508075688772

// 25) tan(x): Returns the tangent of a number.
const num5 = Math.tan(1);
console.log(num5); //1.5574077246549023

// 26) tanh(x): Returns the hyperbolic tangent of a number.
const num6 = Math.tanh(4);
console.log(num6); //0.999329299739067

// 27) trunc(x): It returns the integer part of a number.
// Note: This method will not round the number up/down to the nearest integer, but simply remove the decimals.
const removeDecimal = Math.trunc(8.64);
console.log(removeDecimal); //8
