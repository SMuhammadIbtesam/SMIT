// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to enter a number
let userGuess = prompt("Guess a number between 1 and 10:");

// Convert user input to a number
userGuess = Number(userGuess);

// Check if the user's guess matches the random number
if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert(`Sorry, the correct number was ${randomNumber}. Try again!`);
}

