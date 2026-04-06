

//Key Rule ->if–else-if chain =  Only ONE block runs

// exmple as below based only one result you want from all the if-else if chain use this

//1

//Only one status is possible → so else if is perfect here.

let getRequest = 200;

if(getRequest == 400){
console.log("BadRequest");
}else if(getRequest == 200){
console.log("Successfull");
}else if(getRequest == 401){
    console.log("Unauthorized");
}

//2
let age = 18;

if(age > 18){
console.log("allowed to vote");
}else if(age > 18){
console.log("allowed to vote");
}else if(age > 18){
    console.log("allowed to vote");
}
// ============================
// But multiple results you want 
// Multiple if = MULTIPLE can execute

//2
let ageNumber = 18;

if (age > 15) {
    console.log("you you can go for vote 15 vale");
}

if (ageNumber > 12) {
    console.log("you can go for vote 12 vale");
}
