// program to merge property of two objects


const person = {
    name: 'Medha',
    age:32
}


const student = {
    gender: 'Female'
}


const newObj = Object.assign(person, student);

console.log(newObj);