/*
============================================================
FILE: userUtils.js
============================================================

TOPICS:
✔ Default Export
*/


/*
============================================================
DEFAULT EXPORT
============================================================

- Only ONE default export per file
- Can import with ANY name
*/

export default function greetUser(name) {
    console.log("Welcome " + name);
}


/*
============================================================
ADDITIONAL NAMED EXPORT
============================================================
*/

export const appName = "JavaScript Mastery";


/*
============================================================
IMPORTANT NOTES
============================================================

✔ Default export does not need {}
✔ Named export needs {}
*/