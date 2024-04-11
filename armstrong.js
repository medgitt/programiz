//To check for ArmStrnog Number 

const num = 153;
let numAsString = num.toString();
let count = numAsString.length; //3

let result = 0;

for (let i = 0; i < count; i++) {
    result += parseInt(numAsString[i]) ** 3;    
}

if (result === num) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}
