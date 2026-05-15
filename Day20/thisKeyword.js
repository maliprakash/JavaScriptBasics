/*
============================================================
DAY 24 – this KEYWORD (DEEP UNDERSTANDING)
============================================================

TOPICS COVERED:
✔ this in global scope
✔ this in normal function
✔ this in object methods
✔ this in arrow functions
✔ bind()
✔ call()
✔ apply()

IMPORTANT:
"this" is one of the MOST confusing topics
Asked heavily in interviews
Very important in frontend + backend

============================================================
1️ WHAT IS "this"?
============================================================

"this" refers to the object
that is CURRENTLY executing the code.

IMPORTANT:
Value of "this" depends on HOW function is called
NOT where function is written
*/


/*
============================================================
2️ this IN GLOBAL SCOPE
============================================================
*/

// Browser:
// this === window

// Node.js:
// this === module.exports (not global)

console.log("This IN GLOBAL SCOPE",this);


/*
============================================================
3️ this IN NORMAL FUNCTION
============================================================
*/

function normalFunction() {
    console.log("This IN NORMAL FUNCTION",this);
}

normalFunction();

/*
In Browser (non-strict):
window object

In strict mode:
undefined
*/


/*
============================================================
STRICT MODE EXAMPLE
============================================================
*/

"use strict";

function strictFunction() {
    console.log(this);
}

strictFunction(); // undefined


/*
============================================================
4️ this INSIDE OBJECT METHOD
============================================================
*/

let user = {

    name: "Prakash",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();

/*
this refers to object BEFORE dot
Here: user
*/


/*
============================================================
5️ IMPORTANT INTERVIEW TRICK
============================================================
*/

let person = {
    name: "Amit",

    sayName: function () {

        function inner() {
            console.log(this);
        }

        inner();
    }
};

person.sayName();

/*
inner() is normal function
NOT called as object method
this becomes:
   - window (browser)
   - undefined (strict mode)
*/


/*
============================================================
6️ this IN ARROW FUNCTION
============================================================

Arrow functions DO NOT have their own this

They inherit this from surrounding scope
*/

let employee = {

    name: "Rahul",

    normalMethod: function () {

        console.log("Normal:", this.name);

        let arrow = () => {
            console.log("Arrow:", this.name);
        };

        arrow();
    }
};

employee.normalMethod();

/*
OUTPUT:
Normal: Rahul
Arrow: Rahul

Arrow inherited this from normalMethod
*/


/*
============================================================
7️ bind()
============================================================

bind creates NEW function with fixed this
*/

let student = {
    name: "Karan"
};

function intro(city) {
    console.log(this.name + " from " + city);
}

let boundFunction = intro.bind(student);

boundFunction("Pune");

/*
this permanently bound to student
*/


/*
============================================================
8️ call()
============================================================

call executes function immediately
Arguments passed separately
*/

intro.call(student, "Mumbai");


/*
============================================================
9️ apply()
============================================================

apply executes immediately
Arguments passed as array
*/

intro.apply(student, ["Delhi"]);


/*
============================================================
10️ bind vs call vs apply
============================================================

bind:
✔ returns new function
✔ does NOT execute immediately

call:
✔ executes immediately
✔ arguments separated

apply:
✔ executes immediately
✔ arguments as array
*/


/*
============================================================
11️ REAL-WORLD USE CASE
============================================================

Used heavily in:
✔ Event handlers
✔ React classes
✔ Method borrowing
✔ API wrappers
✔ Callbacks
*/


/*
============================================================
COMMON MISTAKES
============================================================
*/

//Confusing arrow vs normal function

//Forgetting that this depends on CALL SITE

//Using arrow function as object method
let badExample = {

    name: "Wrong",

    greet: () => {
        console.log(this.name);
    }
};

badExample.greet();

/*
Arrow does NOT bind object this
*/


/*
============================================================
BEST PRACTICES
============================================================

✔ Use normal methods for objects
✔ Use arrow for callbacks
✔ Use bind carefully
✔ Understand call-site concept deeply

============================================================
KEY TAKEAWAYS – DAY 24
============================================================

✔ this depends on HOW function is called
✔ Normal function gets dynamic this
✔ Arrow function inherits this
✔ Object method → this = object
✔ bind/call/apply control this manually

Mastering this = major JavaScript milestone
*/