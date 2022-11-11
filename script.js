// VARIABLES
// An array of choices variable
var choices = "rps";

// An array of winning conditions
var winningConditions = ["rs", "pr", "sp"];

// Number of wins, draws and losses
var numOfWins = 0,
  numOfDraws = 0,
  numOfLosses = 0;

// Loops 10 times
for (let i = 0; i < 10; i++) {
  // Store user input
  var userChoice = prompt("Choose rock(r), paper(p) or scissors(s)?");

  // Store random computer choice
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Combine the variables as a the result
  var result = userChoice + computerChoice;

  if (computerChoice === r) {
    var computerChose = "Rock";
  } else if (computerChoice === p) {
    var computerChose = "Paper";
  } else {
    var computerChose = "Scissors";
  }

  alert(`The computer chose ${computerChose}`);

  // Conditional statement comparing user input to the computer input
  if (userChoice === computerChoice) {
    // Increment the number of draws and create a draw alert
    numOfDraws++;
    alert("It's a draw! 😮");
    // Conditional statement to check if result matches the winning conditions
  } else if (winningConditions.includes(result)) {
    // Increment the number of wins and create an winning alert
    numOfWins++;
    alert("You win! 🥳");
  } else {
    // Increment losses and alert loss
    numOfLosses++;
    alert("You lose! 😭");
  }

  // increments games played
  var numOfGames = i + 1;

  // adds plural in games played
  if (numOfGames === 1) {
    var plural = "";
  } else {
    var plural = "s";
  }

  var stats = `-----------------\n${numOfGames} Game${plural} Played\n${numOfWins} Wins\n${numOfDraws} Draws\n${numOfLosses} Losses\n-----------------\n\n`;

  if (i < 9) {
    var keepPlaying = confirm(`${stats} Play again?`);
  } else {
    var keepPlaying = confirm(`${stats} Thanks for playing!`);
  }

  if (!keepPlaying) {
    alert("Thanks for playing!");
    break;
  }
}
