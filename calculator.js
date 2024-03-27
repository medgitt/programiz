//Make a Simple Calculator

let num1;
let num2;
let operator;
let result;


const readline = require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter the first number",(number1)=>{
    num1=parseInt(number1);

    r1.question("enter 2nd number",(number2)=>{
        num2=parseInt(number2);

        r1.question("enter the operator sign",(opsign)=>{
            
            
            operator=opsign;

            // let expression=num1+opsign+num2

            // result=eval(expression);

            //other way is to take switch case 

            switch(operator){
                
                case "+": result=num1+num2;
                break;
                case "-": result=num1-num2;
                break;
                case "*": result=num1*num2;
                break;
                case "/": result=num1/num2;
                break;
                default: console.log("Invalid Operator");
             
            
            }
            console.log(result)
            r1.close()    
          
        })
        
    })

})