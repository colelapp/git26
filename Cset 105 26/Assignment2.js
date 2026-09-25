
const prompt = require('prompt-sync')();

//exercise 1
// let hashtags = "#";10
// for(let i = 0; i < 7; i++){
//     console.log(hashtags);
//     hashtags += "#";
// }


// //exercise 2
// for(let r = 1; r <101; r++){
//     if (r % 3 ===0 && r % 5 ===0){
//         console.log("FizzBuzz");
//     }
//     else if(r % 3 ===0){
//         console.log("Fizz");
//     }
//     else if (r % 5 ===0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(r);
//     }
// }
// //exercise 3
//  for(let z=1; z<4;z++ ){
//     console.log("# # # #");
//     console.log(" # # # #");
//  }

// //exercise 4

// for(let r = 1; r <=50; r++){
//     console.log(r);
// }
// for(let z = 1; z <=25; z++){
//     console.log(z);
// }
// for(let e = 1; e <=25; e+=2){
//     console.log(e);
// }
// for(let n = 1; n <=25; n++){
//     if(n%3===0){
//         console.log(n);
//     }
// }
// for(let p = 1; p <=50; p++){
//     if(p%5===0){
//     console.log(p);
//     }
// }
// for(let t = 1; t <=50; t++){
//     if(t%3===0 && t%2>0){
//         console.log(t);
//     }
//     else if(t%2===0 && t%3>0){
//         console.log(t);
//     }
// }
// for(let t = 1; t <=100; t++){
//     if(t%3===0 && t%2===0  && t%12>0){
//         console.log(t);
//     }
// }

// //excersize 5 

// for(let r = 50; r >=1; r--){
//     console.log(r);
// }
// for(let z = 25; z >=1; z--){
//     console.log(z);
// }
// for(let e = 25; e >=1; e-=2){
//     console.log(e);
// }
// for(let n = 25; n >=1; n--){
//     if(n%3===0){
//         console.log(n);
//     }
// }
// for(let p = 50; p >=1; p--){
//     if(p%5===0){
//     console.log(p);
//     }
// }
// for(let t = 50; t >=1; t--){
//     if(t%3===0 && t%2>0){
//         console.log(t);
//     }
//     else if(t%2===0 && t%3>0){
//         console.log(t);
//     }
// }
// for(let t = 100; t >=1; t--){
//     if(t%3===0 && t%2===0  && t%12>0){
//         console.log(t);
//     }
// }

// //exercise 6

// console.log("Please select an option");
// console.log("Press 1 to add");
// console.log("Press 2 to subtract");
// console.log("Press 3 to multiply ");
// console.log("Press 4 to divide");
// console.log("Press 5 to quit");
// let option =prompt("Please select your option");

// while (isNaN(option)||Number(option) > 5 || Number(option) < 1) {
//     option = prompt("Please select a valid option");
// }
// option=Number(option)
// if (option === 5) {
//     process.exit();
// }

// let num1 = prompt("Enter your first number")
// let num2 = prompt("Enter your second number")
// if (isNaN(num1) || isNaN(num2)) {
//     console.log("You did not enter a number the program is now ending")
//     process.exit();
// }
// if (option === 1) {
//     console.log (Number(num1) + Number(num2));
// }
// else if (option === 2) {
//    console.log(Number(num1) - Number(num2));
// }
// else if (option === 3) {
//     console.log(Number(num1) * Number(num2));
// }
// else if (option === 4) {
//     console.log(Number(num1) / Number(num2));
// }




