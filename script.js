// DOM - Document Object Model

/* DOM stands for Document Object Model. The Document Object Model is the JavaScript standard to access
and share document over the Internet. It allows to modify the web pages. It represents how a particular 
document is structured and it also helps to modify the website. */

// Selecting Elements
// There are many ways to select an element.

// Finding an HTML element by an ID.
// This is the easiest and most effective way to find an element.

const el = document.getElementById("heading1");
console.log(el); //<h1 id="heading1" class="text">Test1</h1>

// Finding the element by tag name
// To manipulate all elements of a particular kind. Manipulate all the headings in website.
const tagName = document.getElementsByTagName("h1");
console.log(tagName); //HTMLCollection(2) [h1#heading, h1#heading1, heading: h1#heading, heading1: h1#heading1]

// Finding the element by class name
// Class name are assigned to elements to style them uniquely.

const className = document.getElementsByClassName("text");
console.log(className); //HTMLCollection(2) [h1#heading.text, h1#heading1.text, heading: h1#heading.text, heading1: h1#heading1.text]

// Finding elements by CSS selectors.
// CSS selectors combine multiple classes, id, tag name, etc. to select a particular element.
// To find all the <h2> that have a class of 'text'.

const querySelect = document.querySelectorAll("h2.text");
console.log(querySelect);
/* NodeList [h2#heading2.text]
   0: h2#heading2.text
   length: 1 */

/* Use querySelector to replace absolutely all other methods like getElementById,
getElementByClassName, tagName.

querySelector():- Use the querySelector to target only one specific element.
querySelectorAll():- Use the querySelectorAll to target multiple elements. */

// Target class element by using (.):
const allClass = document.querySelectorAll(".text");
console.log(allClass);
/* NodeList(3) [h1#heading.text, h1#heading1.text, h2#heading2.text]
   0: h1#heading.text
   1: h1#heading1.text
   2: h2#heading2.text */

// Target id element by using (#):
const allId = document.querySelectorAll("#heading1");
console.log(allId);
/* NodeList [h1#heading1.text]
   0: h1#heading1.text */

// Target element by tag name:
const allTag = document.querySelectorAll("h1");
console.log(allTag);
/* NodeList(2) [h1#heading.text, h1#heading1.text]
   0: h1#heading.text
   1: h1#heading1.text */

// Elements Properties and Methods.
/* HTML elements have different attributes assigned to them like id, class, or types.
They are standard attribute for different elements.
Some attributes are applicable to all elements, and some are applicable to particular ones.
for eg.:- ID or CLASS are applicable for all elements. TYPE property is applicable to input
          elements and buttons only. */

// Elements Properties
const element = document.querySelector("#heading3");
console.log(element); //<h3 id="heading3" class="text abc text">TEST</h3>

// element.classList: Use classList to get access to all the class.
const cl = element.classList;
console.log(cl);
/* DOMTokenList(3) ['text', 'abc', 'test', value: 'text abc test']
   0: "text"
   1: "abc"
   2: "test" */

// element.id: Get id of the element.
const id = element.id;
console.log(id); //heading3

// element.innerHTML: Get the inner text of that element.
const text = element.innerHTML;
console.log(text); //TEST

// Methods

// Target the button
const btn = document.querySelector("button");
console.log(btn); //button

const addEvent = btn.addEventListener("click", () => {
  alert("CLICKED");
});
console.log(addEvent);

const info = btn.getBoundingClientRect();
// This returns a information of button.
console.log(info); //DOMRect {x: 8, y: 127.84375, width: 57.5, height: 21, top: 127.84375, …}

const attr = btn.hasAttribute("type");
// Ith checks element has an attribute type or not.
console.log(attr); //true

const removeAttr = btn.removeAttribute("type");
// It removes the attribute.
console.log(removeAttr);
// Check the hasAttribute is removed or not.
console.log(btn.hasAttribute("type")); //false

// Working with Classes
// Use menu.html
/* Classes are used to style element, by using JavaScript to do something to 
elements with certainn class. */

const menuClicked = (currEl) => {
  // Target class by using className
  const menuItems = document.getElementsByClassName("menu-item");

  // Remove active class.
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }

  // When user click on menu list add active class.
  currEl.classList.add("active");
};

// Creating, Traversing and Removing Node.
// Creating:
/* There are different ways to create an HTML element using JavaScript.
The most used is document.createElement() method. */

const heading = document.createElement("h4");
console.log(heading); //<h4></h4>

// It just create the lement but doesn't added to DOM.
// To added to DOM use appendChild method. Add it to any element or the main body as well.

// To target the body.
const body = document.querySelector("body");
console.log(body); //<body>...</body>

// To append child in body element
const append = body.appendChild(heading);
console.log(append); //<body><h4></h4></body>

// To add text in it.
const addText = (heading.innerText = "Hello, World!");
console.log(addText); //Hello, World!

// Traverse
// Target all subjects:
const sub = document.querySelector(".subjects");
console.log(sub);
/* <ul class="subjects">
      <li>Maths</li>
      <li>History</li>
      <li class="fav-sub">English</li>
    </ul> */

// Target each thing specifically:
// first element in the list:-
const firstSub = sub.firstElementChild;
console.log(firstSub);
/* <li>Maths</li> */

// last element in the list:-
const lastSub = sub.lastElementChild;
console.log(lastSub);
/* <li class="fav-sub">English</li> */

// Target to fav-subjects
const favSub = document.querySelector(".fav-sub");
console.log(favSub);
/* <li class="fav-sub">English</li> */

const prevSub = favSub.previousElementSibling;
// It give us previous sibling in the list.
console.log(prevSub);
/* <li>History</li> */

const nextSub = firstSub.nextElementSibling;
// It give us the next one in the list.
console.log(nextSub);
/* <li>History</li> */

// Removing
// Remove the favourite subject.

const removeFavSub = favSub.remove();
console.log(removeFavSub);
