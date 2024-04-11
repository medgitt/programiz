// program to count the number of keys/properties in an object

const student = { 
    name: 'Medha',
    age: 32,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;


for(let key in student) {

    ++count;
}

console.log(count);