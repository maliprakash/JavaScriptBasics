/*

TOPICS:
✔ Importing modules
✔ Named imports
✔ Default imports
✔ Alias imports

This file connects all modules
*/

/*
============================================================
1️ IMPORT NAMED EXPORTS
============================================================
*/

import { PI, add, subtract } from "./mathUtils.js";

console.log("PI:", PI);

console.log("Add:", add(10, 5));

console.log("Subtract:", subtract(20, 8));


/*
============================================================
2️ IMPORT DEFAULT EXPORT
============================================================
*/

import greet from "./userUtils.js";

greet("Prakash");


/*
============================================================
3️ IMPORT NAMED EXPORT FROM SAME FILE
============================================================
*/

import { appName } from "./userUtils.js";

console.log(appName);


/*
============================================================
4️ ALIAS IMPORT
============================================================

Rename import using as
*/

import { add as addition } from "./mathUtils.js";

console.log(addition(100, 50));


/*
============================================================
5️ IMPORT ALL
============================================================
*/

import * as math from "./mathUtils.js";

console.log(math.add(5, 5));
console.log(math.subtract(20, 10));


/*
============================================================
MODULE SCOPE DEMO
============================================================

// console.log(secretMessage);

ERROR

Why?
secretMessage is NOT exported
Modules have private scope
*/


/*
============================================================
HOW TO RUN ES MODULES
============================================================

OPTION 1 – Browser:
Use script type="module"

Example:

<script type="module" src="app.js"></script>


OPTION 2 – Node.js:
Add in package.json:

{
  "type": "module"
}

Then run:
node app.js
*/


/*
============================================================
COMMON MISTAKES
============================================================
*/

// Forgetting .js extension

// Using default import with {}

// Importing non-exported values


/*
============================================================
BEST PRACTICES
============================================================

✔ Keep modules small
✔ Export only needed values
✔ Use default export for main functionality
✔ Use named exports for utilities

============================================================
KEY TAKEAWAYS – DAY 25
============================================================

✔ Modules split code into files
✔ export shares functionality
✔ import reuses functionality
✔ Named exports require exact names
✔ Default exports allow any import name
✔ Modules have private scope

Modules are foundation of scalable apps
*/