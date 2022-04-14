let round = 0;
let playerPoints = 0;
let computerPoints = 0;

function resetGame() {
  document.location.reload();
}

const reset = document.getElementById("reset");
reset.addEventListener("click", resetGame);

const winnerp = document.getElementById("winnerp");

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

function playerPlay(e) {
  if (round === 5) {
    return;
  }
  round++;
  const playerSelection = e.target.textContent.toUpperCase();
  const computerSelection = computerPlay();
  const result = getResult(playerSelection, computerSelection);
  const resultContainer = document.getElementById("result");
  const resultString =
    `Round ${round}: you played ${playerSelection} and computer played ${computerSelection} and ` +
    result;
  const p = document.createElement("p");
  p.textContent = resultString;
  resultContainer.appendChild(p);

  if (result === "YOU WIN") {
    playerPoints++;
  }
  if (result === "YOU LOSE") {
    computerPoints++;
  }
  const pp = document.querySelector("#pp");
  pp.textContent = playerPoints;

  const cp = document.querySelector("#cp");
  cp.textContent = computerPoints;
  // console.log("player" + playerPoints);
  // console.log("computer" + computerPoints);

  if (round === 5) {
    let champ = "";
    if (playerPoints > computerPoints) {
      champ = "PLAYER";
    }
    if (playerPoints < computerPoints) {
      champ = "COMPUTER";
    }
    if (playerPoints === computerPoints) {
      champ = "TIED";
    }
    console.log(champ);
    winnerp.classList.remove("hide");
    winnerp.classList.add("show");

    const winner = document.querySelector("#winner");
    winner.textContent = champ;

    reset.classList.remove("hide");
    reset.classList.add("show");

    return "GAME OVER";
  }
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "YOU TIE!";
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

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", playerPlay);
});
