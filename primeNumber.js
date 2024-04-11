let number=11;

// isPrime=true

// if(num===1){

//     console.log("Neither the number is prime nor composite")
// }else if(num>1) {
    
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             isPrime=false;
//             break;
//         }

//     }
// }

// if(isPrime){
//     console.log("number is prime" )
// }else{
//     console.log("number is not prime")
// }


// program to check if a number is prime or not


let isPrime = true;

// check if number is equal to 1
if (number == 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to (number-1)
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            // console.log("number is not a prime number")
            
        }else{console.log("is a prime number")}
    }

    // if (isPrime) {
    //     console.log(`${number} is a prime number`);
    // } else {
    //     console.log(`${number} is a not prime number`);
    // }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
