//Add two numbers


//taking input from the user 

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});


readline.question('Enter the first number',num3=>{
    readline.question("enter 2nd number ",num4=>{
        num3=parseInt(num3);
        num4=parseInt(num4);

        const sum=num3+num4;

        console.log(sum);
        readline.close();
    })})

