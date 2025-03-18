// String interpolation

let name = 'kiran';
let age = 2;

console.log(`Hi, my name is ${name} and I am ${age} years old`)
// When strings are written like this using backticks instead of quotations,
// So that the embedded variables can be evaluated to their values,
// These strings are called `template strings`.
// The method by which JS evaluates these embedded expressions or identifiers
// is called String interpolation.
// This supports multi-line string.

// >> Control structures
// -- Programming contructs to control the flow of logic

// in JS, block of code is represented by curly braces `{`, `}`
{
    // block of code...
}

// >> 1. Conditional Statement

const age_limit = 18;
const heavy_age_limit = 21;
age = 22;
// if-else ladder
if (age >= heavy_age_limit){
    console.log("You can drive heavy vehicle")
}
else if (age >= age_limit){
    console.log("You can drive...");
}
else{
    console.log("You cannot drive...");
}

// nested if

let nationality = "indian"
age = 20;
if (age >= age_limit){
    if (nationality == 'indian'){
        console.log("Welcome back to india... Enjoy the drive...");
    }
    else {
        console.log("Please ensure you get your internation driver's license...");
    }
}
else {
    console.log("Please wait until an adult is present.");
}


// Switch case
// Deciding which block of code to run based on different results of a single expression
let choice = 2

switch (choice){
    case 1:
        console.log(`You selected choice ${choice}`)
        break;
    case 2:
        console.log(`You selected choice ${choice}`)
        break;
    case 3:
        console.log(`You selected choice ${choice}`)
        break;
    default:
        console.log("Please check your choice...")
}

// Ternary operator

    //  Assignment of value for a variable based on truth value of an expression
    // <variable> = <expression> ? <valueIfTrue> : <valueIfFalse>;

    let value = 2 > 0 ? "yes" : "no";

    console.log(value);

// Loops

// for loop
    //  JS has mainly 3 types of for loops

    // for (expr1; expr2; expr3){
    //     // block of code
    // }

    // expr1 :> executed once before starting the loop
            //   >> Usually used for initializing a counter variable (eg : let i)
    // expr2 :> condition to be checked before next iteration
            //   >> Usually a conditional statement or expression (eg: i <= 10)
    // expr3 :> executed once after every iteration
            //   >> Usually an increment or decrement operator (eg: i++)
// Example code :> printing numbers from 1 to 5

for (let i = 1; i <= 5; i++){
    console.log(i);
}
// for... in... >> Iterating throug indices/keys of arrays/objects
    // Let's take an array object as example
    let arr1 = ['Kiran','Rahul','Rajeev']

    for (let i in arr1){ // here, i gets each index values of the array
        console.log(arr1[i]); // Accessing array elements using indexing
    }

    let student = {
        name : "Arun",
        age : 20
    }
    for (key in student){ // here, 'key' variable gets each 'key' of the object
        console.log(`${key} >> ${student[key]}`);
    }
//  for... of... >> iterating through items of an iterable like string, array, etc

    let s = "Hello";

    for (char of s){
        console.log(char);
    }

    for (let item of arr1){
        console.log(item);
    }

// while loop >> conditional looping

    // while (condition){
    //     // statements
    // }
    
    i = 1;
    while (i < 3){
        console.log(i);
        i++;
    }
// do while loop >>
    // do {
    //     this block of code will be executed once
    //      regardless of the condition's truth value.
    //     ...
    // }
    // while (condition-if true, the block of code will be repeated)