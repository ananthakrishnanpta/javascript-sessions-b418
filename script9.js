let arr = ['Yashu', "Sheeba", "Rohit", "Kiran"];
console.log("Original array : ",arr);

// Destructuring the array elements

// Collect the inner items into separate variables

let [s1, s2, ,s3] = arr;
console.log("s1 :",s1);
console.log("s3 :", s3);

// Rest pattern
// Let's say while accessing the students data, we need just 2 students as of now,
// rest of them we need in an array to be processed later.
// The rest operator is used to collect multiple items into an array

// it can be used in function parameters to expect unknown number of parameters,
// used for array or object destructuring.
// It is used in React for easy extraction of values from complex objects.

let [a, b, ...restOfStudents] = arr;

console.log(`
    a : ${a},
    b : ${b},
    rest : ${restOfStudents}
    `);

// Spread operator : used for unpacking arrays or objects
// Used for merging or combining object properties or arrays

let a1 = [1,2,3];
let a2 = [4,5,6];

let a3 = [...a1, ...a2];
console.log(a3);


// Callbacks  

function display(r){
    console.log('The result is : ',r);
}

function f1( a, b, cf1){
    console.log("Calculating....");

    let sum = a + b;

    // here, the function referenced by cf1 is called back after implementing the logic
    // of the f1 function. 
    // These kind of functions which are passed into another function as parameter,
    // to be called back by the function, is called a call back function.
    // For example, here, display is the callback function which is passed into f1.
    cf1(sum);
}


f1(2,3, display);



// https://jsonplaceholder.typicode.com/users/ => 
    // a public api which gives people records in JSON format

// defining a function to accept a callback function
function fetchUserData(callbackfn) {
    console.log("Fetching user data...");

    // Make a request to a public API
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Convert the response to JSON
        })
        .then((data) => {
            callbackfn(null, data); // Call the callback with the data
        })
        .catch((error) => {
            callbackfn(error, null); // Call the callback with the error
        });
}

// This function will be used as callback in the previously defined function
function handleUserData(error, data) {
    if (error) {
        console.log("Error fetching data:", error);
    } else {
        console.log("User Data:", data);
    }
}

// Call the fetchUserData function with a callback
fetchUserData(handleUserData);
