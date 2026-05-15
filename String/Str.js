let number = 65535;
let s = "A"; // you need to define s first
let char = s.charAt(0);

let output = "";
for (let i = 0; i < number; i++) {
    output += char;
}
console.log(output.length); // 65535
console.log(output);        // prints all on one line