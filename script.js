'use strict';

/*
//NOTES!!!
// Selects something from html file
// to select a class use dot to select a id use #
//.textContent grabs text from .message
console.log(document.querySelector('.message').textContent);
// = changes start guessing into "Correct Number!!"
document.querySelector('.message').textContent = 'Correct Number!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//In a input filed instead of .textContent use .value to select a value.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//will select the button element
// .addEventListner is a method so you have to call it again with a ().
// on click(first arugument) funciton(second arguemnt) will exexute after

//Math.random gives a random betnween 0-1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //fucntion will take the value from .guess box
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //First scenario is to always assume there is no input
  //if there is no number inputed then conosle log no number
  // Each time there is a wrong guess score decreases by one

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed right!!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // when guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is less than secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
