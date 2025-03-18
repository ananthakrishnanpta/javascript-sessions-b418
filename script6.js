// Coding session : March 13, 2025

// JS arrays

// DSA arrays( or the general concept of array is that it is fixed length and homogenous in nature)

// JS arrays on the other hand are dynamic and heterogenous.

// This is more similar to `list` datatype of python

const a = [1,2,3];
const students = ['Sai', 'Pai', 'Rai', 'Tai','Kai'] 
// Accessing the elements
    
    // Indexing
    console.log(students[1]);
    // Indexing is similar to array indexing in other languages
    // But, unlike some other languages, negative indexing is not supported.


    console.log(students[-1]); // shows `undefined`
    // Reason is, JS stores the index numbers as `key`s like in a JS object or python dictionary

    // Introduced in ES 2022, JS added a new way for accessing elements by a new method called .at()
    // This method supports negative indices as well 
    console.log(`Student at index 1 is ${students.at(1)}`);
    console.log(`Student at index -1 is ${students.at(-1)}`);

    // finding index of first occurence of an element
    console.log(students.indexOf('Pai')); // returns '1'

    // Checking if an item exists or is included inside an array => gives boolean value
    console.log(students.includes("Rai")); // true
    console.log(students.includes("Chai")); //false

// Modifications to Array

        // Appending elements
        // In python we have append method for adding 'one' item to end of list
        // and extend for extending the list with more elements at the end

        // In JS, the `push` method adds one more elements to the end of array

        a.push(40);
        a.push(23, 35);
        console.log(a);
        // the push method here has a return value too. It returns the new length after pushing element
        let new_length = a.push(2);
        console.log(new_length); // 7
        //>> Incase you want to know the length of array otherwise,
        // One can always use the `length` property of array object
        console.log(a.length) // please note that this is a field and not method

        // `pop` method helps remove the last element

        console.log("array 'a' before popping : ",a);
        a.pop()
        console.log("array 'a' after  popping : ",a);
        // Here, the return value of pop method is the element which was popped.
        let popped_item = a.pop(); 
        console.log(`The item popped was ${popped_item} and now the array is ${a}`);

        // Adding element/s to beginning >> `unshift`
        a.unshift(123,235);
        console.log(a);

        // Removing element from beginning >> `shift`
        a.shift();
        console.log(a);

// Read more at :https://github.com/ananthakrishnanpta/javascript-tutorials/blob/main/04-02-JS-Arrays.md