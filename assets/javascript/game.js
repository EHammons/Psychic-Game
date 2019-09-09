var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyGuessed = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var guessesText = document.getElementById("guesses-text");

winsText.textContent = wins;
lossesText.textContent = losses;
leftText.textContent = guessesLeft;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

var newGame = function() {
    guessesLeft = 9;
    alreadyGuessed = [];
    guessesText.textContent = null;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    if (computerChoices.includes(userGuess)) {
                
        if (userGuess === computerGuess) {
            wins++;
            newGame();
        } else if (guessesLeft > 1) {
            guessesLeft--;
            if (guessesLeft === 8) {
                alreadyGuessed.push(userGuess);
            } else {
                alreadyGuessed.push(" " + userGuess);
            }
            guessesText.textContent = alreadyGuessed;
        } else {
            losses++;
            newGame();
        }
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    leftText.textContent = guessesLeft;
}