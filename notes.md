# Asynchronous Operations in JS

- When running lengthy tasks, since JS is single threaded, the script can freeze until each task is completed.
- To prevent this behaviour and let JS run these tasks in the background without blocking the main event loops, we use asynchronous operations

- JS handles async operations using *Callbacks*, *Promises* and *Async/Await*

- The tasks which require this type of programming include API calls which can take certain time period to get response.

- More often, javascript function setTimeout() is used to demonstrate the time lag of these operations in examples to learn async operations.

# 1. Callback
- A function passed as argument to be executed later inside another function

# 2. Promises
- Object representing the eventual completion or failure of an async operation.
- It is a placeholder for a value that will be available in the future after an async operation is either successfully completed(**resolved**) or failed with error(**rejected**).

A promise can have 3 states:
- State 1 : **Pending**
    - Waiting for async operation completion
- Further states :
    - 2 : In case of success: **FulFilled**
    - 3 : In case of failure: **Rejected**

## In JS, a promise object is constructed using a `Promise` constructor
- The constructor takes 2 parameters *resolve* and *reject*.
    - **resolve** - Called when the async operation is successfully completed.
    - **reject** - Called when the async operation is a failure

```javascript

let newPromise = new Promise(
    (resolve, reject) => {

        // Async operation is carried out here
        let success = true; // a fake success condition

        if(success) {
            // runs the callback `resolve` when success
            resolve("Task Completed... Yeay!!!");
        }
        else 
        {
            // runs the callback `reject` when failure
            reject("Task failed...);
        }
    }
);
```

## Handling promises
- Result of a promise can be handled using:
    - .then()       - in case of success
    - .catch()      - in case of failure
    - .finally()    - for cleaning up

```javascript

newPromise.then(// in case of success
    (result) => {
        // arrow function to do something with the result
        console.log(result);
    }
).catch(// in case of failure
    (some_error) => {
        // arrow function to handle the error
        console.log(error);
    }
).finally(//Execute either way
    () => {
        console.log('Operation is done');
    }
)
```

### Role of `resolve` and `reject`
- **resolve** : marks the promise as fulfilled and passes the value to the next `.then()` in the promise handling chain.
- **reject** : marks the promise as rejected and passes the error to the `.catch()` in the promise handling chain.

- Calling `resolve` or `reject` inside a promise decides the outcome of that promise.
- In short,  `.then` handles the outcome of `resolve` and `.catch()` handles the outcome of `reject`.

---

# 3. Async/Await  
- Deeply nested callbacks can often lead to errors which is referred to as a **Callback hell**.
- `Async/Await` is a modern and cleaner syntax for handling asynchronous operations, introduced in ES2017 (ES8).  
- It simplifies working with Promises, making asynchronous code easier to read and write.
- This makes asynchronous code look synchronous.

### How It Works  

1. **`async` Keyword**  
   - Declares a function as asynchronous.  
   - Always returns a `Promise`, even if no explicit Promise is returned.  

2. **`await` Keyword**  
   - Pauses the execution of the function until the Promise is resolved or rejected.  
   - Can only be used inside an `async` function.

- The `async` keyword ensures the function always returns a `Promise`.  
- The `await` keyword pauses execution until the Promise is resolved/rejected.  
- Combine `await` with `try...catch` for clean error handling.  
- Use `Promise.all` with `Async/Await` for parallel execution.  
---

## Basic Syntax  

```javascript
async function exampleAsyncFunction() {
    try {
        let result = await someAsyncOperation();
        console.log(result); // Logs the resolved value
    } catch (error) {
        console.error(error); // Handles any errors
    } finally {
        console.log("Operation complete");
    }
}
```

---

## Sequential Async Operations  

- `Async/Await` makes it easy to execute asynchronous tasks in sequence:  

```javascript
async function processSequentialTasks() {
    try {
        let data1 = await fetch("https://api.example.com/task1");
        console.log("Task 1 Data:", await data1.json());

        let data2 = await fetch("https://api.example.com/task2");
        console.log("Task 2 Data:", await data2.json());

        let data3 = await fetch("https://api.example.com/task3");
        console.log("Task 3 Data:", await data3.json());
    } catch (error) {
        console.error("Error in sequential tasks:", error);
    }
}

processSequentialTasks();
```

---

## Parallel Async Operations  

- For independent tasks that can be executed concurrently, use `Promise.all` with `Async/Await`:  

```javascript
async function processParallelTasks() {
    try {
        let [task1, task2, task3] = await Promise.all([
            fetch("https://api.example.com/task1"),
            fetch("https://api.example.com/task2"),
            fetch("https://api.example.com/task3"),
        ]);

        console.log("Task 1 Data:", await task1.json());
        console.log("Task 2 Data:", await task2.json());
        console.log("Task 3 Data:", await task3.json());
    } catch (error) {
        console.error("Error in parallel tasks:", error);
    }
}

processParallelTasks();
```

---

## Error Handling  

- Use `try...catch` blocks to manage errors effectively:  

```javascript
async function fetchWithErrorHandling() {
    try {
        let response = await fetch("https://api.nonexistentendpoint.com");
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

fetchWithErrorHandling();
```



---
