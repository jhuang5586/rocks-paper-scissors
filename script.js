console.log("Welcome to James' rocks paper scissors game");

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "ROCK";
  } else if (randomNumber == 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playerPlay() {
  let playerChoice = prompt("please choose ROCK, PAPER, or SCISSORS");
  let UpperCasePlayerPlay = playerChoice.toUpperCase();
  let playsArr = ["ROCK", "PAPER", "SCISSORS"];
  if (playsArr.includes(UpperCasePlayerPlay)) return UpperCasePlayerPlay;
  console.log("INCORRECT SELECTION. PLEASE CHOOSE ROCK, PAPER, OR SCISSORS.");
  playerPlay();
}

function playRound(playerSelection, computerSelection) {
  console.log("You chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);

  if (playerSelection === computerSelection) {
    return "YOU TIE";
  }
  if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "YOU WIN";
  }
  if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "YOU LOSE";
  }
  if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "YOU WIN";
  }
  if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "YOU LOSE";
  }
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "YOU WIN";
  }
  if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "YOU LOSE";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerPlay(), computerPlay());
  }
}

console.log(game());
