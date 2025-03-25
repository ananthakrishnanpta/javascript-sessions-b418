// To understand the functioning of the Promise syntax,
// let's take a common example of a food delivery business


// Let's Create a promise expecting food delivery to be done

let foodOrdered = new Promise((resolve, reject) => {
    
    // Faking the condition leading to food being delivered.
    let delivered = false;

    if (delivered){
        resolve("Food was delivered!!! Yummy!!!");
    } else {
        reject("Sorry, the food went weeeeeeeeeyyyyyyy!!!");
    }
});

// Now let's handle the promise
foodOrdered.then(
    (message) => {
        console.log("Resolved with message : ",message);
    }
).catch(
    (error) => {
        console.log("Rejected with error message : ", error);
    }
).finally(
    () => {
        console.log("We hope you have a nice day. Don't eat!!!");
    }
);