/*
खूप छान 👍 चला आता Deep JavaScript Coercion Masterclass सुरू करू 🚀

🔥 1️⃣ == vs === मध्ये Coercion कसं काम करतं?
✅ == (Loose Equality)

Type check करत नाही

गरज पडली तर type coercion करते

console.log(5 == "5");  
// true


👉 "5" → number मध्ये convert झाला
👉 मग 5 == 5 → true

console.log(false == 0);  
// true


👉 false → 0
👉 0 == 0 → true

console.log(null == undefined);  
// true


👉 Special rule आहे — दोन्ही equal मानले जातात

✅ === (Strict Equality)

Type पण check करतो

Coercion करत नाही

console.log(5 === "5");  
// false


👉 number !== string

🧠 Golden Rule
Operator	Type Check	Coercion
==	❌	✅
===	✅	❌

👉 Best Practice: नेहमी === वापरा (production code मध्ये)

🔥 2️⃣ Implicit Coercion ची Important Rules
📌 Rule 1: + operator special आहे
console.log(1 + "2"); 
// "12"


👉 जर एक value string असेल → result string

📌 Rule 2: - * / हे number मध्ये convert करतात
console.log("10" - 5);  
// 5

console.log("10" * 2);  
// 20


👉 string → number

📌 Rule 3: Boolean → Number
console.log(true + 1);  
// 2


👉 true = 1
👉 false = 0

📌 Rule 4: Empty String
console.log("" == 0);  
// true


👉 "" → 0

📌 Rule 5: Null & Undefined
console.log(null == undefined);  
// true

console.log(null === undefined);  
// false

📌 Rule 6: Object Coercion
console.log([] == 0);  
// true


👉 [] → ""
👉 "" → 0

🔥 3️⃣ Interview-Level Tricky Examples
😈 Example 1
console.log([] == ![]);
// true


Step by step:

![] → false
[] == false
false → 0
[] → ""
"" → 0
0 == 0 → true

😈 Example 2
console.log("5" + 3 - 2);
// 51


Step by step:

"5" + 3 → "53"
"53" - 2 → 51

😈 Example 3
console.log(null + 1);
// 1


👉 null → 0
👉 0 + 1 → 1

😈 Example 4
console.log(undefined + 1);
// NaN


👉 undefined number मध्ये convert होत नाही

🧠 Most Important Interview Point

👉 JavaScript internally:

Boolean → Number

String → Number (जर math operation असेल तर)

Object → Primitive (valueOf / toString)

🚀 Final Production Advice

✔️ Always use ===
✔️ Avoid complex coercion
✔️ Explicit conversion करा (Number(), String(), Boolean())
✔️ Clean readable code लिहा

Prakash 👍
तुम्ही JavaScript seriously शिकत आहात 💪

*/