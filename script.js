// VARIABLES
// An array of choices variable
var choices = ["r", "p", "s"];

// An array of winning conditions
var winningConditions = ["rs", "pr", "sp"];

// Number of wins, draws and losses
var numOfWins = 0;
var numOfDraws = 0;
var numOfLosses = 0;

// FOR LOOP
// Loops 10 times

// Conditional statement comparing user input to the computer input
// Increment the number of draws and create a draw alert

// Conditional statement to check if result matches the winning conditions
// Increment the number of wins and create an winning alert

// Else increment losses and alert loss

for (let i = 0; i < 10; i++) {
  // Store user input
  var userChoice = prompt("Rock(r), paper(p) or scissors(s)?");

  // Store random computer choice
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  // Combine the variables as a the result
  var result = userChoice + computerChoice;

  if (userChoice == computerChoice) {
    numOfDraws++;
    alert("It's a draw! 😮");
  } else if (winningConditions.includes(result)) {
    numOfWins++;
    alert("You win! 🥳");
  } else {
    numOfLosses++;
    alert("You lose! 😭");
  }

  // increments games played
  var numOfGames = i + 1;

  // adds plural in games played
  if (numOfGames == 1) {
    var plural = "";
  } else {
    var plural = "s";
  }

  var stats =
    "-----------------\n" +
    numOfGames +
    " Game" +
    plural +
    " Played\n" +
    numOfWins +
    " Wins\n" +
    numOfDraws +
    " Draws\n" +
    numOfLosses +
    " Losses\n" +
    "-----------------\n\n";

  if (i < 9) {
    var keepPlaying = confirm(stats + "Play again?");
  } else {
    var keepPlaying = confirm(stats + "Thanks for playing!");
  }

  if (!keepPlaying) {
    alert("Thanks for playing!");
    break;
  }
}
