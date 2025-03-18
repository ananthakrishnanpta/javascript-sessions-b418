// Coding session : March 11 2025
// JS Objects

// JS objects can be created mainly in 3 ways

    // 1. Without constructor > using literal notation

    const student = {
        name : "Rohit",
        age : 2,
        learn : function (sub) {console.log(`Hello, my name is ${this.name}, I'm learning ${sub}.`)},
        sleep : function() {console.log(`Hi, ${this.name} went to sleep.. Zzzzz...`)}
    }
    student.learn("Physics");
    student.sleep();

    // 2. Using `Object` constructor

    const teacher = new Object(); // This creates a generic JS object with no key: value pairs.
    // Now we assign key: value pairs one by one using the object reference
    teacher.name = "Yashu";
    teacher.age = 3;
    teacher.teach = function (sub) {console.log(`I am a teacher, my name is ${this.name} and I'm teaching ${sub}`)};

    // 3. Using constructor from Class definition
        // >> Object Oriented Programming

        class Member{
            // private identifiers must be declared on top of class definition.
            #password; // declaring a private variable `#password`

            // According to modern JS, we skip using the `function` keyword while defining
            // methods in classes.
            // constructor method helps initialize object variables.
            constructor(username, pwd) {
                this.username = username;
                this._leaves = 0; // using _ as prefix helps developers understand that the variable is
                // supposed to be private and should not be accessed directly. But it is not really 
                // private

                // Since 2022 updations, JS allows actually private variables and methods.
                // If a datafield or method identifier is prefixed with a single `#` symbol,
                // they become private and will be accessible inside the object.
                this.#password = pwd;
            }
            // Whenever we need to give conditional or indirect access to private variables using 
            // object reference, we need to define getter and setter methods.
            getPassword(){
                return this.#password;
            }
            setPassword(new_password){
                this.#password = new_password;
            }

            // Let's define some object methods too
            login(username, pwd){
                if(this.username == username && this.#password == pwd){
                    console.log(`Logging in user ${this.username}`);
                }
                else {
                    console.log("Wrong credentials.");
                }
            }
        }

        // Let's create an object from Member class now
            // I'm not providing the parameters of constructor, hence those properties will be undefined.
        const m = new Member(); 
        m.login();
        // Now let's create a proper object from Member class providing necessary parameters
        const m2 = new Member("Jayadeep", "itvedant@123");

        m2.login("Jayadeep","itvedant@123");
        
        // Let's say, we have a new class to be designed called Student which will be inheriting from
        // Member class

        class Student extends Member{ // extends means to inherit methods and fields from a parent class.
            constructor(name, pwd, grade){
                // using the parent class' constructor to initialize the first two variables
                super(name, pwd);
                // the below variable is additional in the child class
                this.grade = grade; 
            }
        }

        const s = new Student("Sheeba","sheeba@123", 2);
        console.log(`Password for student ${s.username} is ${s.getPassword()}`);
        s.setPassword("itvedant@123");
        console.log("After changing the password : ", s.getPassword());
