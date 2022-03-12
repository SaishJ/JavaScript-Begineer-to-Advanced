# Logic and Control Flow

## Conditional Statements

### If-Else statement
```javascript
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condiyion is false
}
```

### If- Else If -Else statement
```javascript
if (condition1) {
  // code to be executed if the condition is true
} else if (condition2) {
  /* code to be executed if the
     condition1 is false and
     condition2 is true */
} else {
  /* code to be executed if
     condition1 is false and
     condition2 is false */
}
```

### Switch statement
```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

### Ternary Operator
```javascript
condition ? exprIFTrue : exprIfFalse
```
> condition: An expression whose value is used as a condition.

> exprIfTrue: An expression which is executed if the condition is truthy.

> exprIfFalse: An expression which is executed if the condition is falsy.

### Truthy / Falsy Values
#### FALSY Values
* false
* 0 (zero)
* "", '', `` (empty strings)
* null
* undefined
* NaN (not a number)

#### TRUTHY Values
* Everything that is not FALSY

## Loops

### For Loop

```javascript
for (st 1; st 2; st3) {
  // code block to be executed
}
```

- st1 is executed (one time) before the execution of the code block.
- st2 defines the condition for executing the code block.
- st3 is executed (every time) after the code block has been executed.

### While Loop

```javascript
while (condition) {
  // code block to be executed
}
```

### Do While Loop

```javascript
do {
  // code block to be executed
} while (condition);
```

### For In Loop

```javascript
for (key in object) {
  // code block to be executed
}
```

### For Of Loop

```javascript
for (variable of iterable) {
  // code block to be executed
}
```
