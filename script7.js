// Coding Session March 17, 2025

// 1. Window 

// a. Console
    console.log("This is a message log");
    console.error("This is an error.")
    console.warn("This is a warning.")

// b. Screen
    console.log("Screen width : ",screen.width);
    console.log("Screen height: ", screen.height);
    console.log("Screen orientation: ", screen.orientation);

// c. Location
    console.log("Location url: ", location.href);
    console.log("Location ", location.pathname);

// d. History
    // history.back();
    // history.forward();

// -------------------------------------------------------------------------------------
    // Document -> Document Object Model

    // Accessing the DOM elements

    // 1. document.getElementById('<id>');
    const div_content = document.getElementById('content');
    // the above method gives live access to a particular element by its ID
    console.log(div_content.innerText); // provides the included text
    console.log(div_content.innerHTML); // provides the included HTML within the element

    // 2. document.getElementsByClassName('<ClassName>');
    const paras = document.getElementsByClassName('message');
    // the above method doesn't give one but a collection of live elements matching the class
    // console.log(paras); //=> This will give output : HTMLCollection(2) [p.message, p.message]
    console.log(paras[0].innerText);
    // Live shown above, we can access individual elements from the collection by 
    // indexing, iteration, etc

    // 3. document.getElementsByTagName('<tagname>');
    const all_p = document.getElementsByTagName('p');

    // The following two methods helps select by any CSS selector
        // (Supported in Modern Browsers only)
    // 4. document.querySelector('selector'); // Gives first match element only
    // 5. document.querySelectorAll('selector'); // Gives all matched elements as NodeList


// Manipulating the elements
const para1 = document.querySelector('.message');
console.log("First para: ",para1.innerText);
para1.innerText = "Here is the changed text !!!"; 

// Creating an element in the document
    // creating a new document element >> div
    const newDiv = document.createElement('div');
    // Filling the innerHTML >> adding a paragraph inside
    newDiv.innerHTML = "<p>This is new</p>";

    // Appending the created element inside an existing element >> Here, directly inside body
        // fetching reference to body element
        const body = document.querySelector('body');
    body.appendChild(newDiv); // the new division is now added to the page

// Removing an element
    // identifying the parent
    const contentDiv = document.getElementById('content');
    // Identify the child element to be removed
    const p2 = document.getElementById('p2');
    
    // Removing the child from parent
    contentDiv.removeChild(p2);

// Replace a child element
    // identifying the parent
    // For now, we are going to use the same parent as earlier
    // i.e., contentDiv

    // identifying the child element
    const oldChild = document.getElementsByTagName('p')[0];
    // create an element for replacement
    const newChild = document.createElement('p');
    newChild.innerText = "New content replacing old";
    // replaceing the old element with new element
    oldChild.replaceWith(newChild);

// Setting attributes
    // Let's give an id to the new element
    newChild.setAttribute('id', 'newP'); // gives the new id to element

    // Let's add a new class to this element
    newChild.classList.add('special');
    newChild.classList.add('dummy_class');
    // removing a class from the element
    newChild.classList.remove('dummy_class');

