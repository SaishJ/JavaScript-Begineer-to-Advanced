# DOM - Document Object Model

## Introduction to DOM

> **DOM** stands for Document Object Model. It is a standard to access and share document or website over the Internet. It represents how a particular document is structured and it also helps to modify the website.

## Selecting Element

1. By ID

   > The `getElementById()` method returns an element with a specified value.

```javascript
document.getElementById("heading");
```

2. By Tag Name

   > The `getElementByTagName()` method returns a collection of all elements with a specified tag name.

```javascript
documnet.getElementsByTagName("h1");
```

3. By Class Name

   > The `getElementByClassName()` method returns a collection of elements with a specified class names.

```javascript
document.getElementByClassName("text");
```

4. By CSS Selectors

   > The `querySelector()` method returns the first element that matches a CSS selector.

   > The `querySelectorAll()` method returns all matches.

```javascript
document.querySelectorAll("h2.text");
```

## Elements Properties and Methods

> It represents an HTML element like `P`, `DIV`, `A`, `TABLE`, or any other HTML element.

### Elements Properties:

- `classList`

  > Returns the class names of an element.

- `id`

  > Returns the value of the id attribute of an element.

- `innerHTML`
  > Returns the content of an element.

### Methods:

- `addEventListener()`

  > Attaches an event handler to an element.

- `getBoundingClientRect()`

  > Returns the size of an elements and its position relative to the viewport.

- `hasAttribute()`

  > Returns true, if an element has a given attribute.

- `removeAttribute()`
  > Removes an element from the DOM.

## Creating, Traversing and removing node.

### Creating

- `createElement()`

  > The `createElement()` method creates an element node.

- `appendChild()`

  > The `appendChild()` method appends a node (element) as the last child of an element.

### Traversing

- `firstElementChild`

  > The `firstElementChild` property returns the first child element of the specified element.

- `lastElementChild`

  > The `lastElementChild` property returns the last child element of an element.

- `previousElementSibling`

  > The `previousElementSibling` property returns the previous element in the same tree levell.

- `nextElementSibling`
  > The `nextElementSibling` property returns the next element in the same tree level.

### Removing

- `remove()`
  > The `remove()` method removes an element (or node) from the document.
