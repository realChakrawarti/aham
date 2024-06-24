---
title: "Promise in JavaScript - Introduction"
excerpt: "Promises in JavaScript and how to handle asynchronous tasks"
date: "2024-06-24"
tags: ['JavaScript', 'Promise']
---


JavaScript Promises handle asynchronous tasks. They act like placeholders for future results (success or error) and prevent the main program from getting stuck. This allows you to combine Promises with other parts of your code for flexible asynchronous programming.

### What is a promise?

A Promise is an object that is used as a placeholder for the eventual completion of an asynchronous operation and its resulting value. It is a future agreement that some data will be returned to you.

Any Promise is in one of three mutually exclusive states: fulfilled, rejected, and pending:

- A promise **p** is _fulfilled_ if **p.then(f, r)** will immediately enqueue a job to call the function f.
- A promise **p** is _rejected_ if **p.then(f, r)** will immediately enqueue a job to call the function r.
- A promise is _pending_ if it is neither _fulfilled_ nor _rejected_. It is the default state of a defined promise. An unresolved promise is always in the pending state. 

A promise is said to be settled if it is **not _pending_**, i.e. if it is either *fulfilled* or *rejected* and attempting to resolve or reject a resolved promise has no effect.

**Here is a small summary of the promise states:**
- fulfilled - The action relating to the promise succeeded
- rejected - The action relating to the promise failed
- pending - Hasn't fulfilled or rejected yet
- settled - Has fulfilled or rejected

**We use promise to avoid blocking our main thread. For example:**
- Making API calls from the browser to a server
- Node server handling request concurrently
- Wait for user's permission to access location, microphone, camera etc. when requested
- Waiting for an element to show up on the screen, front-end testing libraries like Cypress & RTL

**Here are few Web APIs that returns a promise:**

- Fetch API: Used for making HTTP requests to servers. It returns a Promise that resolves with the response object upon successful completion or rejects with an error.
- FileReader API: Allows reading the contents of files asynchronously. It returns a Promise that resolves with the file data or rejects with an error.
- Geolocation API: Provides access to the user's location information. It returns a Promise that resolves with the location object or rejects with an error.
- WebSockets API: Enables real-time, two-way communication between a web page and a server. The connection establishment process itself returns a Promise.

### Creating Promises

Most of the time we consume promises. But we can also create our own promises. 

We often create promise when we want to bundle together a bunch of functionalities that has nested promises.

```js
const executor = (resolve, reject) => {
// resolve() or reject()
};

const promise = new Promise(executor);
```

The promise constructor accepts an executor function.

The executor is called with two arguments: resolve and reject. These are functions that may be used by the executor function to report eventual completion or failure of the deferred computation. Returning from the executor function does not mean that the deferred action has been completed but only that the request to eventually perform the deferred action has been accepted.

#### Static: `Promise.withResolvers()` method

A static method, called `withResolvers`, to the Promise constructor which returns a promise along with its resolution (resolve) and rejection (reject) functions conveniently exposed. The exposed methods within the top level can then be passed to other functions.

Read more on TC39 proposal: https://github.com/tc39/proposal-promise-with-resolvers

Here is an amazing blog on the FrontendMasters going in-depth with examples: https://frontendmasters.com/blog/control-javascript-promises-from-anywhere-using-promise-withresolvers/

### Resolving & Rejecting Promise

- Resolve: The function that is used to resolve the given promise. Resolving means successfully returning the data that the promise has set out to get. This is positive outcome of a promise.
- Reject: The function that is used to reject the given promise. For example, User didn't gave permission to access Camera, Microphone etc, or API fails. Negative outcome of a promise.


```js
const promise = new Promise(function(resolve, reject) {
  const num = Math.random();
  if (num >= 0.5) {
    resolve("Promise is fulfilled!");
  } else {
    reject("Promise is rejected!");
  }
});

promise
.then(message => console.log(message))
.catch(err => console.error(err))
.finally(console.info('Promise has settled!'));
```

#### Chained Promises

The chain is composed of `then()` calls, and typically has a single `catch()` at the end, optionally followed by `finally()`.

The promise methods `then()`, `catch()`, and `finally()` are used to associate further action with a promise that becomes settled. The `then()` method takes up to two arguments; the first argument is a **callback function for the fulfilled case** of the promise, and the second argument is a **callback function for the rejected case**. The `catch()` and `finally()` methods call `then()` internally and make error handling less verbose. For example, a `catch()` is really just a then() without passing the fulfillment handler.

The above example can be written only using `then()`, repurposed for `catch()` and `finally()`

```js
promise
.then(message => console.log(message))
// .catch() ⬇️
.then(function onFulfilled() {}, function onRejected(err) {console.error(err)})
// .finally() ⬇️
.then(console.info('Promise has settled!'));
```

#### The `async/await` keyword

The most common way is to mark a function `async`, this changes from returning data to returning a promise. We can then use `await` within the function. When we `await` a promise, the function is **paused in a non-blocking way** until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.

Async functions _always_ return a promise, whether we use `await` or not. That promise resolves with whatever the async function returns, or rejects with whatever the async function throws.

```js
// wait ms milliseconds
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
};

async function hello() {
  await wait(500);
  return 'world';
};

async function foo() {
  await wait(500);
  throw Error('bar');
};

hello(); // returns a promise that fulfills with "world"
foo(); // returns a promise that rejects with Error('bar')

```

**ANTI-PATTERN:** If the function by default returns a promise, don't mark it async, then await and return. Instead just return the promise. Though there is no harm in double wrapping a promise.

### Static: `Promise.reject()` & `Promise.resolve()` methods

#### `Promise.resolve()`
If the value is a promise, that promise is returned; if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

```js
Promise.resolve("Success").then(
  (result) => {
    console.log(result); // "Success"
  }
);
```

#### `Promise.reject()`
Returns a Promise object that is rejected with a given reason.

This a short-hand for `new Promise((resolve, reject) => reject(reason))`

### Static: Helpers methods

#### `Promise.all()`

`Promise.all()` waits for all fulfillments (or the first rejection).

Accepts an array of promises and returns a new promise which is fulfilled with an array of fulfillment values in the order of the promises passed, regardless of completion order once all the promises are fulfilled. 

If one gets rejected, the entire promises rejects with the reason of the first passed promise that rejects. 

If we pass in 4 promises that resolve after a timeout and one promise that rejects immediately, then Promise.all will reject immediately.

For example: Upload 7 images concurrently, but if one of them fails, and the rest 6 that are in-flight, the entire call gets aborted. If multiple promises are dependent on each other, then it makes sense to use `Promise.all()`.

```js
const promiseOne = Promise.all([1, 2, 3, Promise.resolve(444)]);
const promiseTwo = Promise.all([1, 2, 3, Promise.reject(555)]);

console.log(promiseOne);
// { [[PromiseStatus]]:resolved, [[PromiseValue]]:(4) }

console.log(promiseTwo);
// { [[PromiseStatus]]:rejected, [[PromiseValue]]:555 }
```

#### `Promise.allSettled()`

Returns a promise that is fulfilled with an array of promise state snapshots, but only after all the original promises have settled, i.e. become either fulfilled or rejected. 

The promise state snapshot contain an object with an status, fulfilled or rejected and on success we get the data and on error we get the reason.

```js
const p1 = Promise.resolve(42);
const p2 = Promise.reject('Called reject');

Promise.allSettled([p1, p2]).then(result => console.log(result));

// Output
[
    {
        "status": "fulfilled",
        "value": 42
    },
    {
        "status": "rejected",
        "reason": "Called reject"
    }
]
```

#### `Promise.any()`

Returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an `AggregateError` holding the rejection reasons if all of the given promises are rejected.

```js
// First fulfilled promise
const p1 = Promise.reject('42');
const p2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'Resolved with 43')
});

Promise.any([p1, p2]).then(res => console.log(res)); // Resolved with 43

// All rejects
const p1Rejects = Promise.reject(92);
const p2Rejects = Promise.reject('Rejected with 92');

Promise.any([p1Rejects, p2Rejects]).catch(res => console.log(res));
// AggregateError: All promises were rejected
```

#### `Promise.race()`

Returns a new promise which is settled in the same way as the first passed promise to settle.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([p1, p2]).then(result => {
  console.log(result);
  // Both resolve, but p2 is faster
});
```

Use case: If we want to add a timeout something that has a promise, and that promise doesn't have the option to pass it in on a third party API.

```js
const resolve =  await Promise.race(originalPromise, timeoutFunction)
```


### References:
- Syntax: Promises Part I https://www.youtube.com/watch?v=bmOzRI5Job0
- Syntax: Promises Part II https://www.youtube.com/watch?v=7gTwa9ofqcM
- Syntax: Promises Part III https://www.youtube.com/watch?v=wLNnTEQdyvo
- TC39 Promise Objects https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-objects
- Async function, web dev: https://web.dev/articles/async-functions