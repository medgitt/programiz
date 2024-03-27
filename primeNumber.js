let num=11;

isPrime=true

if(num===1){

    console.log("Neither the number is prime nor composite")
}else if(num>1) {
    
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }

    }
}

if(isPrime){
    console.log("number is prime" )
}else{
    console.log("number is not prime")
}
