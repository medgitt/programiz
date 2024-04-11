// program to replace a character of a string

// const string = 'Mr Red has a red house and a red car';

// // replace the characters
// const newText = string.replace('red', 'blue');


// console.log(newText);


const string = 'Mr Red has a red house and a red car';


const regex = /red/g;

const newText = string.replace(regex, 'blue');

console.log(newText);