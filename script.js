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
    //recursively prompts the user to start again
    return getHumanChoice();
  }
}

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
  //loop to play 5 rounds
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
