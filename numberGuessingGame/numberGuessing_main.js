/**
 * Created by DucLe on 3/19/17.
 */
var randomNumber = Math.floor(Math.random()*100 + 1);

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessField = document.querySelector(".guessField");
var guessSubmit = document.querySelector(".guessSubmit");
guessSubmit.addEventListener("click", checkGuess);

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    var guess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guess: "+guess;
    } else {
        guesses.textContent += " " + guess;
    }
    if (guess === randomNumber) {
        lastResult.textContent = "Congratulation! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        gameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!! GAME OVER !!!";
        lowOrHi.textContent = "";
        gameOver();
    } else if (guess < randomNumber) {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "Your guess is too low!";
        guessCount++;
        // Continue the game
    } else if (guess > randomNumber) {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "Your guess is too high!";
        guessCount++;
        // Continue the game
    }
    guessField.value = "";
    guessField.focus();
}

function gameOver() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll(".resultParas p");
    // This code will loop through all the paras in div resultParas and reset the text content.
    for (var i = 0; i<resetParas.length; i++) {
        resetParas[i].textContent = "";
    }
    document.body.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random()*100+1);
}