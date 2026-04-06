
/*
✅ What is switch?

👉 switch is used when you have multiple conditions based on the SAME variable

👉 It’s an alternative to multiple else if

*/

/*
⚠️ Important: break

👉 break stops execution after a match
👉 Without break, it will continue executing next cases (fall-through) ❗
 */
/*
| Keyword    | Works in      | Meaning                     |
| ---------- | ------------- | --------------------------- |
| `break`    | loop + switch | Exit loop or switch         |
| `continue` | loop only     | Skip current loop iteration |


*/

// With Break
let caseValue1  = "case2";

switch (caseValue1) {
    case "case1":
        console.log("This is case 1");
        break;
    case "case2":
        
        console.log("This is case 2");
        break;
    default:
        console.log("This is default case");
}           
//Real world example: Days of the week
let statusCode = 200;

switch (statusCode) {
    case 200:
        console.log("Success");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 500:
        console.log("Server Error");
        break;

    default:
        console.log("Unknown status");
}

//Withought Break -> It continues because no break
let caseValue2 = "case1";

switch (caseValue2) {
    case "case1":
        console.log("WIHOUHT BREAK case 1");
    case "case2":
        console.log("WIHOUHT BREAK case 2");
    default:
        console.log("WIHOUHT BREAK Deafult case");
} 

// Multiple cases (same result)
let day = "Weekday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}

/*
🧠 Quick Summary
switch = exact match only
Uses ===
Always use break
No ranges (> <)
default = fallback
Fall-through happens without break
*/