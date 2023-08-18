'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const inputNumber = +document.querySelector('.guess').value;

    if (!inputNumber) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    }

    else if (inputNumber === randomNumber) {
        document.querySelector('.message').textContent = '🎉Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess').disabled = true;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (inputNumber !== randomNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = inputNumber > randomNumber ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☹️ You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.guess').disabled = true;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});