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

