// Datatypes

// Primitive

// 1. Number

let i = 0;
console.log("Datatype of i : ",typeof i); // This is equivalent to print(type(i)) in python

// 2. String

i = "Hello";
console.log("Datatype of i : ",typeof i);

// 3. Boolean
i = true; // Please note, truth values in JS are true and false (lower case)
console.log("Datatype of i : ",typeof i);

// 4. Undefined 
let j;
console.log("Datatype of i : ",typeof j);

// 5. Null
i = null
console.log("Datatype of i : ",typeof i); // This will show as 'object' type

// 6. Symbol
i = Symbol("abcabc");
console.log("Datatype of i : ",typeof i, "; Value : ",i);

// Non-primitive Datatypes

    // Objects :>> Can be inbuilt or user defined(either using Class or without)
        //>> Built-in objects :>> arrays, dates, maps, sets, intarrays, floatarrays, promises, etc
    
        //>> User-defined objects :>>
        let student = {
            fname : 'Alice',
            age : 20
        };
        console.log(student.fname)

// -------
// Operators

// Arithmetic
// +, -, *, /, %, **(since 2016)
// Increment/ Decrement operators x++, ++x / x--, --x
// increments or decrements value of variable by 1
let x;
x = 0;
console.log(x); // This prints x value
console.log(x++); // This is post increment, the value is incremented after the statement executes.
// In the above code, x changes value to 1, but the printed value is the old value.
console.log(++x); // Pre-increment. This increments the value and then executes the statement.
// Hence prints the next value of x

// Similarly post and pre decrement also exists.

// Now, just like many other languages, shorthand operators or assignments operators exists
x += 1 //>> equivalent to x = x + 1

// Just like in python, string concatenation is possible using the '+' symbol
let first_name = "Mary";
let last_name = "Jane"
let full_name  = first_name + " " +last_name
console.log(full_name); 

// Logical operators:
//  and >> &&
//  or  >> ||
//  not >> !

// Comparison operator
// >, <, >=, <= , !=, == , ===(special in JS)

let x1 = "123"; // This is a string
let x2 = 123;   // This is a number 
console.log("Loose equality : ",x1 == x2);    // Checks the value only, converts and checks if possible
console.log("Strict equality : ",x1 === x2); // Checks the datatype also for comparison
