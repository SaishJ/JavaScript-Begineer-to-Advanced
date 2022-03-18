# Arrays in Detail

> **Array** stores order collection of data. The DataType of **Array** is an object. Array can store any type of data (eg. String, Number, Object, Boolean, Function, etc.)

## Array Methods

- `array.push(value)`

  > Adds the value to the end of an array.

- `array.pop()`

  > Removes the value from the end of an array.

- `array.shift()`

  > Removes the first item of an array.

- `array.unshift(value)`

  > Adds the value to the start of an array.

- `array.splice(index, no_of_elements)`

  > Removes the `no_of_elements`, starting from `index` from the array.

- `array.slice(fromIndex, toIndex)`

  > Copies a certain part of the array.

- `concat()`

  > Joins several arrays into one.

- `join('')`

  > It returns a string of array values.

- `array.length`

  > It returns the number of elements in an array.

- `reverse()`

  > Reverse the order of the elements in an array.

- `toString()`

  > It returns a string representing the specified array and its elements.

- `includes(searchElement)`

  > Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

- `sort()`

  > It sorts the elements of an array. It sorts an array alphabetically.

- `indexOf(searchElement)`

  > It returns the index of the first occurance of that value.

- `lastIndexOf()`

  > It returns the index of the last occurance of that value.

## Array Methods for Looping

- array.forEach()
  > It executes a provided function once for each array element.

```javascript
array.forEach((element, index) => {
  //code block to be exceuted
});
```

- array.map()
  > It creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
array.map((element, index) => {
  // code block to be executed
});
```

- array.filter()
  > It creates a new array with all elements that pass the test implemented by the provided function.

```javascript
array.filter((element, index) => {
  // code block to be executed
});
```

- array.find()
  > It finds an element in the array that matches a certain condition. The **find()** method returns the first value of that satisfies the condition.

```javascript
array.find((element) => {
  // code block to be executed
});
```

- array.some()
  > It tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
array.some((element, index, number) => {
  // code block to be executed
});
```

- array.every()
  > It tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
array.every((element, index) => {
  // code block to be executed
});
```

- array.findIndex()
  > It returns the index of the first element in the array that satisfies the provided testing function.

```javascript
array.findIndex((element, index, array) => {
  // code block to be executed
});
```

- array.reduce()
  > It runs a function on each array element to produce (reduce it to) a single value. It works rom left-to-right.

```javascript
array.reduce((prevValue, currentValue, currentIndex, array) => {
  // code block to be executed
}, initialValue);
```

- array.reduceRight()
  > It runs a function on each array element to produce (reduce it to) a single value. It works from right-to-left.

```javascript
array.reduceRight((accumulator, currentValue, index, array) => {
  // code block to be executed
}, initialValue);
```
