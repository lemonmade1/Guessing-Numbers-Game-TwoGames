// Game Variables
let mysteryNum = 50;
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = '';
let gameWon = false;

// let biggestNum = 100;
// let smallestNum = 1;
// let prevGuess = [];

// The Input and Output fields
let input = document.querySelector('#input');
let output = document.querySelector('#output');

// The Button
let btn = document.querySelector('button');
btn.style.cursor = 'pointer';
btn.addEventListener('click', clickHandler, false);

// let btnReset = document.querySelector('#reset');

// The Arrow
let arrow = document.querySelector('#arrow');

// The Functions
let render = () => {
  arrow.style.left = playersGuess * 3 + 'px';
}

function clickHandler() {
  playGame();
}

let playGame = () => {
  // mysteryNum = Math.floor(Math.random() * 
  // (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

  guessesRemaining = guessesRemaining - 1;
  guessesMade = guessesMade + 1;
  gameState = `Guess: ${guessesMade}, Remaining: ${guessesRemaining}`;

  playersGuess = parseInt(input.value);

  if (playersGuess > mysteryNum) {
    output.innerHTML = `That's too high. ${gameState}`;

    if (guessesRemaining < 1) {
      endGame();
    }
  }

  else if (playersGuess < mysteryNum) {
    output.innerHTML = `That's too low. ${gameState}`;

    if (guessesRemaining < 1) {
      endGame();
    }
  }

  else if (playersGuess === mysteryNum) {
    gameWon = true;
    endGame();
  }
 
  render();

}

let endGame = () => {
  if (gameWon) {
    output.innerHTML = `Yes, it's ${mysteryNum}! <br> It's only took you ${guessesMade} guesses.`;
  }
  else {
    output.innerHTML = `No more guesses left! <br> The number was: ${mysteryNum}.`;
  }
}




