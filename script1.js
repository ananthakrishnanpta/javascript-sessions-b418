// 1. Comments
// -------------------------------------------
// Single line comment in JS

/*
Multi-line comment in JS
*/

// 2. Output
// --------------------------------------------------
// console.log is equivalent to print statement in python
console.log("Hello World!");

// Please Note >>>
    // In JS, every statement should end with `;` symbol.
    // Even if forget to type the semi-colon, a semi-colon will be inserted automatically 
    // before running the script. This is called `automatic semi-colon insertion`.

// 3. Variable Declaration

// Just like python, we can assign variables directly like
x = 10;
console.log(x);
// This method is outdated and not entertained.
// There are three keywords for declaring variables
// const, let, var
    // To Declare constant values
        // 1. const - cannot be re-assigned
    const c = 20;
    console.log(c);
    // c = 30; This will throw error.
    
    // >>> Cannot be declared separately without assignment.
    // const a; will throw error 

        // 2. let - can be re-assigned but not re-declared
    // Two ways to declare and assign, can be done together or separately.
        let l = 10; // Declaration and Assignment together
        
        let a; // Declaration
        a = 20; // Assignment
    // Multiple variables can be declared together
        let x1, y;
        x1 = 10;
        x1 = 20;
    // Values can be re-assigned
        let z = 10;
        // let z = 20; This will throw error.
        // 'z' variable has been declared already.
        // let cannot be used to redeclare variables.

        // 3. var - can be redeclared and re-assigned 
    // Declaration is similar to let
    var v1 = 10;    

    var v2;
    v2 = 20;

    // A special feature of `var` variables is `variable hoisting`
    // Normally, in any programming language, a variable can be utilized 
    // only after declaration.
    // But variables declared using 'var' keyword can be referenced before declaration.
    console.log("Value of v3 before assignment :", v3);
    v3 = 15;
    console.log("Value of v3 after assignment : ", v3);
    var v3;

        // >>> Please note, while choosing variable declarations,
        // priority should be given the following way :
        // const >> let >> var
        // In modern javascript, 'var' usage is not entertained.

// 4. Block Scope
// In python, we use indendation for declaring scope or block of code.
// In JS, we use curly braces >> { }

{
    // This is block of code
}
    // let and const are block scope
    // These declarations are only accessible in the block they are defined in,
    // or internal blocks

    {
        let a1 = 14;
        const c23 = 234; // This is also block scoped.
        var vx = 16; // var is function-scoped. 
        // the 'vx' variable will be practically global scope in this scenario.
        // Since there are no functions enclosing the declaration.
        console.log(a1)
    }
    console.log("Value of vx: ", vx); 
    // console.log(a1); This will not give result as it was declared inside a different block










