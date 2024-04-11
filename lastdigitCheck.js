// JavaScript Program to Check if the Numbers Have Same Last Digit


let num1=28;
let num2=18;


let str1=num1.toString();
let str2=num2.toString();

let lastDigit1= str1[str1.length-1];
let lastDigit2= str2[str2.length-1];

(lastDigit1==lastDigit2)?console.log("Last Digit matches"):console.log("Does not match");
