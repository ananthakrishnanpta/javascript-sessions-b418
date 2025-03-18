// Coding session March 10, 2025
// Functions 
//  Re-usable code blocks

// In JavaScript, we can define mainly 3 types of functions

// 1. Regular function
function function_name(para1, para2){
    // statement
    // statement
    let value;
    return value; // This is optional
}

    // Example code
    function greetPeople(full_name, language){
        switch(language){
            case 'hindi':
                console.log(`Namaskar ${full_name}`);
                break;
            case 'tamil':
                console.log(`Vanakkam ${full_name}`);
                break;
            case 'english':
                console.log(`Welcome ${full_name}`);
                break;
            case 'kannada':
                console.log(`Namaskara ${full_name}`);
                break;
            default:
                console.log("I don't know your language!!");
        }
    }

    greetPeople('Yashu Patil', 'tamil');

    function degC2Fahrenheit(temp){
        return temp + 32;
    }
    let temp = 20;
    let result = degC2Fahrenheit(temp);
    console.log(`${temp} degree Celcius converted to Fahrenheit is ${result}F`);

    // These kind of named functions are usually used when the function logic
    //  is re-used in various parts of the program or needed to be used as part of modules.


// 2. Anonymous functions
    // Sometimes functions are required to be used as arguments to some other functions
    // These functions are defined and consumed or utilized where they are defined.
    // These functions are not named, they are called anonymous.

    // Let's suppose there is a named function called calc which applies a given function 
    // on two numbers
    function calc(i,j, fn){
        return fn(i, j);
    }

    // when I call the above function, the third parameter is a function reference
    result = calc(20, 30, function (a,b) {return a + b;});
    // At this point, we are using an anonymous function to define a logic,
    // Which is not re-used in any other part of my code.
    console.log(result);
// 3. Arrow function

    result = calc(20, 30, (a,b) => {return a + b;});
    console.log(result);
