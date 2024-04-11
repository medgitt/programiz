// program to clone the object

// declaring object
const person = {
    name: 'Medha',
    age: 32,
}


const clonePerson = Object.assign({}, person);

console.log(clonePerson);


clonePerson.name = 'Jha';

console.log(clonePerson.name);
console.log(person.name);