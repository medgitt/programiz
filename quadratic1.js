//root1,root2 = (-b-+(b^2-4ac))
// ax^2+bx+c=0 



let root1,root2;

let a=4;
let b=2;
let c=6;

let discriminant=(b*b-4*a*c);

if(discriminant>0){
    root1=(-b+Math.sqrt(discriminant))/(2*a);
    root2=(-b-Math.sqrt(discriminant))/(2*a);

    console.log(`The values for root 1 and root2 are : ${root1} , ${root2} `)

}else {
    let real= (-b/(2*a));
    let imag=(Math.sqrt(-discriminant)/(2*a)).toFixed(2);

    console.log(`The real and imaginary values : ${real} , ${imag}`)
}

