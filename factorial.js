let num=5;
let fact=1;
if(num<0){
    console.log("Please enter a valid number ")
}
else if(num===0){
    return 1;
}
else{
    
    for(i=1;i<num;i++){
        fact=fact*i
        
    }
    console.log(fact)
    
    
}

