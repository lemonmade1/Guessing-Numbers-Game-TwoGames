// The Input and Output fields
const input = document.querySelector('#input');
const output = document.querySelector('#output');

// The Button
let btn = document.querySelector('button');
btn.style.cursor = 'pointer';

// The Arrow
const arrow = document.querySelector('#arrow');

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuess: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let guess = NaN;
    while(guess !== this.secretNum) {
      guess = this.getGuess();
      this.prevGuess.push(guess);
      this.render(guess);
      if (guess === this.secretNum) return;
    }
  },

  getGuess: function() {
    let guess = NaN;
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(input.value);
    }
    return guess;
  },

  render: function(guess) {
    arrow.style.left = playersGuess * 3 + 'px';
    let msg = (guess === this.secretNum) ?
      `Congrats! The secret number was ${this.secretNum}! You guessed the number in ${this.prevGuess.length} guesses!`
    :
      `Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
      Previous guesses: ${this.prevGuess.join(', ')}`
    ;
    console.log(msg)
    console.log(output.value);
  }

};

console.log(game.play());