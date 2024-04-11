// program to count the number of vowels in a string

function countVowel(str) { 

    
    const count = str.match(/[aeiou]/gi).length;

    
    return count;
}


const string = "Medha";

const result = countVowel(string);

console.log(result);