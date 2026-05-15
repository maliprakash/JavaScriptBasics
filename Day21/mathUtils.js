/*
============================================================
DAY 25 – MODULES (ES MODULES)
============================================================

FILE: mathUtils.js

TOPICS:
✔ Named Exports
✔ Module Scope

IMPORTANT:
Every JS module has its OWN scope
Variables/functions are NOT global by default
*/


/*
============================================================
1️ NAMED EXPORTS
============================================================

- Export multiple values
- Must import using SAME names
*/

export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


/*
============================================================
MODULE SCOPE
============================================================

Variables inside module are private
unless exported
*/

const secretMessage = "Hidden inside module";

console.log("mathUtils.js loaded");


/*
============================================================
IMPORTANT NOTES
============================================================

✔ export keyword exposes values
✔ Non-exported values stay private
✔ Each file is separate module
*/