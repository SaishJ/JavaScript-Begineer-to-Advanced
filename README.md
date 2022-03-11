# Strings in Detail

## Introduction to String

> In JavaScript, use **Strings** to store Text. It is a primitive Data-Type.

- There are 3 ways to create strings

1. Single quote:-

```javascript
const single = 'This is a string.';
console.log(single);
```

2. Double quote:-

```javascript
const double = "This is a string.";
console.log(double);
```

3. Backticks:-

```javascript
const backtick = `This is a string.`;
console.log(backtick);
```

- The Backslash `\` escape character turns special character into string character:

| Code | Result | Description  |
| :--: | :----: | :----------: |
| (\') |   '    | Single Quote |
| (\") |   "    | Double Quote |
| (\\) |   \    |  Backslash   |

## String Methods

- `string.length`

  > return the number of characters in a string.

- `string[index]`

  > get a certain character of a string.

- `string.toLowerCase`

  > return a lowercased string.

- `string.toUpperCase`

  > return an uppercased string.

- `string.includes('substring')`

  > checks whether a substring exists inside of a string [check the character case]

- `string.indexOf(searchValue)`

  > returns the index of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

- `string.lastIndexOf(searchValue)`

  > returns the index of the last occurrence of the speciffied value, searching backwards from fromIndex. Returns -1 if the value is not found.

- `string.startsWith('substring')`

  > The startsWith() method returns true if string with specified string, otherwise it returns false.

- `string.endsWith('substring')`

  > The endsWith() method returns if a string ends with a specified string, otherwise it returns false.

- `string.slice(start, end)`

  > The slice() method extracts a part of a string and return it as a new string without modifying the original string. The start and end parameter specifies the part of the string to extract.

- `string.split('')`

  > It returns an array of characters of a string.

- `string.split(' ')`

  > It returns an array of words of a string.

- `string.repeat(count)`

  > It returns a string with a number of copies of a string.

- `string.trim()`

  > It removes the whitespace from both sides of a string.

- `string.charAt(index)`

  > It returns the character at a specified index (position) in a string.

- `string.replace(substr, newSubstr)`

  > It returns a new string with a substring (substr) replaced by a new one (newSubstr).

- `string.substr(strat, length)`

  > It returns a portion of the string, starting at the specified index and extending for a given number.
