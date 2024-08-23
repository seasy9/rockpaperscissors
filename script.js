//Step 1.
//Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.333) {
    return "rock";
  } else if (choice <= 0.666) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Step 2.
//Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
  let choice = prompt(
    "What's your choice? (rock, paper, or scissors)"
  ).toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    alert(`You choose ${choice}!`);
    return choice;
  } else {
    alert(
      "You have to choose rock, paper, or scissors to play the game bruh! Try again."
    );
    return getHumanChoice();
  }
}

//Step 3.
//Your game will keep track of the players score. You will write variables to keep track of the players score.
//Create two new variables named humanScore and computerScore in the global scope.

//Initialize those variables with the value of 0.

//Step 4.
//Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//Create a new function named playRound.
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
      computerScore++;
      alert("You lose! The computer chose Paper and Paper beats Rock.");
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice === "scissors"
    ) {
      computerScore++;
      alert("You lose! The computer chose Scissors and Scissors beats Paper.");
    } else if (
      humanChoice.toLowerCase() === "scissors" &&
      computerChoice === "rock"
    ) {
      computerScore++;
      alert("You lose! The computer chose Rock and Rock beats Scissors.");
    } else if (
      humanChoice.toLowerCase() === "rock" &&
      computerChoice === "scissors"
    ) {
      humanScore++;
      alert("You win! The computer chose Scissors and Rock beats Scissors.");
    } else if (
      humanChoice.toLowerCase() === "paper" &&
      computerChoice === "rock"
    ) {
      humanScore++;
      alert("You win! The computer chose Rock and Paper beats Rock.");
    } else if (
      humanChoice.toLowerCase() === "scissors" &&
      computerChoice === "paper"
    ) {
      humanScore++;
      alert("You win! The computer chose Paper and Scissors beats Paper.");
    } else if (humanChoice === computerChoice) alert("It's a tie!");

    alert(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    alert("You won! Congrats!!");
  } else if (humanScore < computerScore) {
    alert("You lost! Better luck next time! Loser!");
  } else {
    alert("This is crazy, it's a tie... what are the chances!");
  }
}
playGame();
//Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
//Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
//Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
//Increment the humanScore or computerScore variable based on the round winner.

//Step 5
//Create a new function named playGame.

//Move your playRound function and score variables so that they’re declared inside of the new playGame function

//Play 5 rounds by calling playRound 5 times.
//Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
//Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
//If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
