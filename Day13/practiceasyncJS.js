// syncronus execution - Blocking

console.log("Start");

console.log("Task 1");
console.log("Task 2");

console.log("End");

 // asyncronus execution - Non-Blokcing

 console.log("Start");

 setTimeout(() =>{
    console.log("Async Task");
 },2000); 

 setTimeout(() =>{
    console.log("Async Task 2");
 });

//Default delay = 0 milliseconds -> Even with 0 ms, it does NOT run immediately
//Key Point (Interview) Even with 0ms delay, setTimeout is asynchronous and executes after the current execution context completes.
 
console.log("End");











