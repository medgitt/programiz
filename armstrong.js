//To check for ArmStrnog Number 


const num=153;
let numAsString=num.toString(); 
let count=numAsString.length;  //3

let result=0;

for(i=0;i<count;i++){
    
    
    result=parseInt(numAsString[i])**count+result
    
    
    console.log(result)
}