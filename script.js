let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userInput = document.getElementById('userGuess');
  const userGuess = parseInt(userInput.value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');
  const resetBtn = document.getElementById('resetBtn');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = '🚫 Please enter a number between 1 and 100.';
    return;
  }

  attempts++;

  if (userGuess < randomNumber) {
    message.textContent = '📉 Too low! Try a higher number.';
  } else if (userGuess > randomNumber) {
    message.textContent = '📈 Too high! Try a lower number.';
  } else {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    attemptsDisplay.textContent = `🔢 Total attempts: ${attempts}`;
    userInput.disabled = true;
    resetBtn.style.display = 'inline-block';
  }

  userInput.value = '';
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('userGuess').value = '';
  document.getElementById('userGuess').disabled = false;
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '';
  document.getElementById('resetBtn').style.display = 'none';
}
