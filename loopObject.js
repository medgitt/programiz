// program to loop through an object using for...in loop

const student = { 
    name: 'Medha',
    age: 32,
    hobbies: ['reading', 'games', 'coding'],
};


for (let key in student) { 
    let value;


    value = student[key];

    console.log(key + " - " +  value); 
} 