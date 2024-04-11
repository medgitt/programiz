let a=1;
let b=1;
let rows=5;

for(let i=1;i<=rows;i++){
    let pattern=" ";
    let c=a+b;
    for(let j=1;j<=i;j++){
        pattern=pattern+a+" ";  
        let c=a+b;
        a=b;
        b=c;
    }
    console.log(pattern);
    a=1;
    b=1;

}