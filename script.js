// Asynchronous JavaScript

// Intervals and Timers

/* setInterval():
                  The setInterval() method calls a function at specified intervals (in milliseconds). The setInterval() method
continues calling the function until clearInterval() is called, or windows is closed. 1 second = 1000 milliseconds. */

setInterval(() => {
  //   console.log("Hello");
}, 1000); //print 'hello' every second.

/* clearInterval():
                  The clearInterval() method clears a timmer set with the setInterval() method. */

const myInterval = setInterval(() => console.log("Hii"), 1000);

clearInterval(myInterval);

/* setTimeout():
                  The setTimeout() method calls a function after a number of milliseconds.
The setTimeout() is executed only once. */

setTimeout(() => console.log("Hello"), 1000); //print 'hello' after 5 second.

/* clearTimeout():
                  The clearTimeout() method clears a timer set with the setTimeout() method. */

const myTimeout = setTimeout(() => console.log("Hii"), 1000);

clearTimeout(myTimeout);

// Difference between Asynchronous and Synchronous

/* Synchronous JavaScript:
              Synchronous JavaScript is one in which the code is executed line by line and their tasks are completed instantly,
i.e. there is no time delay in the completion of the tasks for those lines of code. */

// Example:
console.log("Hi");
console.log("Saish");
console.log("How are you ?");

/* In above example, the first line of the code 'Hi' will be logged first then the second line 'Saish' will be logged and then after its completion,
the third line would be logged 'How are you ?' 
The codes work in a sequence. Every line of waits for its previous one to get executed first and then it gets executed. */

/* Asynchronous JavaScript:
              Asynchronous JavaScript is one in which some lines of code take time to run. These tasks are run in background while the JavaScript engine
keeps executing other lines of code. When the result of the asynchronous takes gets available, is then used in the program. */

// Example:
console.log("Start");
setTimeout(() => {
  console.log("Let us see what happen ...");
}, 2000);
console.log("End");

/* In above example, It first logs 'Start', then it logs 'End', rather than executing the setTimeout function and then it returns the setTimeout function.

First the 'Start' statement got logged in. JavaScript there are the web API's that handle these things for users it passes the setTimeout function in such 
web API and then keep on running our code as usual. It does not block the rest of the code its execution, it gets pushed to the call stack and then finally 
gets executed */

/* Callbacks:
            The function that is passed as an argument inside of another function, is called a callback function. This technique allows a function to call 
another function. */

/* Why use Callback ?
-> One of the biggest benefit of using Callback is, to wait for result of the previous function and then execute another function. */

/* The correct time to use Callback ?
-> The callback function is helpful when have to wait for a result that takes time. For example, the data is coming from a server since 
it takes time for data to move. */

/* Callback is great way of handling asynchronous behaviour in JavaScript. In JavaScript, everything behaves like an object so functions have the type of object
and like any other object (strings, arrays, etc.) pass function as an argument to other function and that's the idea of callback. */

// Example:
function getUser(id, callback) {
  //create a callback function
  setTimeout(() => {
    console.log("Reading user from database ...");
    callback({ id: id, githubUsername: "SaishJ" }); //instead of returning user, call the callback function.
  });
}

// call the getUser function
getUser(29, (user) => {
  //data type of callback is function. Create an arrow function (user) as second parameter
  console.log("User", user);
});
// {id: 29, githubUsername: 'SaishJ'}

// Callback Hell:
/* Example:
Fetch social media app data -> Fetch user profile, then fetch the photos, and then fetch the photo details. */

const fetchUser = (username, callback) => {
  console.log("Reading user ...");
  setTimeout(() => {
    callback({ username });
  }, 2000);
};

const fetUserPhotos = (username, callback) => {
  setTimeout(() => {
    callback(["Photo 1", "Photo 2"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    callback("Details ...");
  });
};

fetchUser("Saish", (user) => {
  console.log(`Your name is: ${user.username}`);
  fetUserPhotos(user.username, (userPhotos) => {
    console.log(`Photos: ${userPhotos}`);
    fetchPhotoDetails(userPhotos[0], (details) => {
      console.log(`Details: ${details}`);
    });
  });
});

// In above code, a nesting of functions here and code also looks scary this is called Callback Hell.

/* Promises:
            Promises are objects that either return the successfully fethed data, or the error.
Promises are alternative to callbacks for delivering the result of asynchronous computation. They are 
more readable as compared to callbacks */

/* Promise Object Properties:
1) Pending = Hasn't fulfilled or rejected yet.
2) Fulfilled = The action relating to the promise succeeded.
3) Rejected = The action relating to the promise failed. */

// Example:
// Creating Promise

function getUserid(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading from database ...");
      resolve({ id: id, githubUsername: "SaishJ" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Extracting repositories from ${username}`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Extracting commits for " + repo + "...");
      resolve("commits...");
    }, 2000);
  });
}
/* Created 3 function, instead of passing callback function, returning a Promise which has 
2 arguments resolve and reject. If everything worked, call resolve otherwise call reject. */

// Call Promise
getUserid(1)
  .then((user) => getRepositories(user.githubUsername))
  .then((repos) => getCommits(repos[1]))
  .then((commits) => console.log("Commits", commits))
  .catch((err) => console.log("Error: ", err.message));
/* Reading from database ...
   Extracting repositories from SaishJ
   Extracting commits for repo2...
   Commits commits... */

/* Async/Await:
            Async makes a function return a promise.
            Await makes a function wait for a promise.
            The better way to write promises and it helps to keep code simple and clean.
In Async/Await, write the word 'async' before any regular function and it becomes a promise. 
In other words 'async/await' is a syntactical sugar of using promises it means, to avoid 
chaining of 'then()' methods in promises, use the 'async/await' approach but internally 
it also uses the chaining. */

const displayData = async () => {
  const user = await getUserid(7);
  const repos = await getRepositories(user.githubUsername);
  const commits = await getCommits(repos[2]);
  console.log(commits);
};

displayData();
