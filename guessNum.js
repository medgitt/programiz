// program where the user has to guess a number generated by a program

function guessNumber() {

   
    const random = Math.floor(Math.random() * 10) + 1;

   
    let number = 10;

   
    while(number !== random) {
        number = 10;
    }

   
    if(number == random) {
        console.log('You guessed the correct number.');
    }

  }


guessNumber();