# Date and Math Object

## JavaScript Date Objects

> **Date Objects** are created with the new Date() constructor. There are 4 ways to create a new date object.

```javascript
new Date()
new Date(year, month, day, hour, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

## JavaScript Date Input

> There are 3 types of JavaScript date input formats:

|    Type    |                 Example                  |
| :--------: | :--------------------------------------: |
|  ISO Date  | "2022-02-22"(The International Standard) |
| Short Date |               "03/22/2022"               |
| Long Date  |      "Mar 22 2022" or "22 Mar 2022"      |

## Get Date Methods

1. getFullYear()

   > Get the year as a four digit number (yyyy).

2. getMonth()

   > Get the month as a number (0-11).

3. getDate()

   > Get the date as a number (1-31).

4. getHours()

   > Get the hour (0-23).

5. getMinutes()

   > Get the minute (0-59).

6. getTime()

   > Get the time (miliiseconds since 1 January 1970).

7. getDay()

   > Get the weekday as a number (0-6).

8. Date.now()

   > It returns the number of milliseconds since 1 January 1970.

9. getSeconds()

   > Get the second (0-59).

10. getMilliseconds()

    > Get the millisecond (0-999).

## Set Date Methods

1. setDate()

   > Set the day as a number (1-31).

2. setfullYear()

   > Set the year (optionally month and date).

3. setMonth()

   > Set the month (0-11).

4. setHours()

   > Set the hour (0-23).

5. setMinutes()

   > Set the minutes (0-59).

6. setSeconds()

   > Set the seconds (0-59).

7. setMilliseconds()

   > Set the milliseconds (0-999).

## JavaScript Math Objects

> The JavaScript Math object allows to perform mathematical tasks on numbers. The Math object has no constructor.

1. abs(x)

   > Returns the absolute value of x.

2. acos(x)

   > Returns the arccosine of x, in radians.

3. acosh(x)

   > Returns the hyperbolic arccosine of x.

4. asin(x)

   > Returns the arcsine of x, in radians.

5. asinh(x)

   > Returns the hyperbolic arcsine of x.

6. atan(x)

   > Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians.

7. atan2(y, x)

   > Returns the arctangent of the quotient of its arguments.

8. atanh(x)

   > Returns the hyperbolic arctangent of x.

9. cbrt(x)

   > Returns the cubic root of x.

10. ceil(x)

    > Returns x, rounded upwards to the nearest integer.

11. cos(x)

    > Returns the cosine of x (x is in radians).

12. cosh(x)

    > Returns the hyperbolic cosine of x.

13. exp(x)

    > Returns the value of Ex.

14. floor(x)

    > Returns x, rounded downwards to the nearest integer.

15. log(x)

    > Returns the natural logarithm (base E) of x.

16. max(x, y, z, ..., n)

    > Returns the number with the highest value.

17. min(x, y, z, ..., n)

    > Returns the number with the lowest value.

18. pow(x, y)

    > Returns the value of x to the power of y.

19. random()

    > Returns a random number between 0 and 1.

20. round(x)

    > Rounds x to the nearest integer.

21. sign(x)

    > Returns if x is negative, null or positive (-1, 0, 1).

22. sin(x)

    > Returns the sine of x (x is in radians).

23. sinh(x)

    > Returns the square root of x.

24. sqrt(x)

    > Returns the square root of x.

25. tan(x)

    > Returns the tangent of an angle.

26. tanh(x)

    > Returns the hyperbolic tangent of a number.

27. trunc(x)

    > Returns the integer part of a number (x).
