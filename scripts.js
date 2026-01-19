function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choice.length);
  let randomChoice = choice[randomIndex];
  return randomChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: rock, paper or scissors?");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    console.log("You won! Rock beats Scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    console.log("You won! Scissors  beats Paper");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    console.log("You won! Paper beats Rock");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore += 1;
    console.log("You lose! Rock beats Scissors");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore += 1;
    console.log("You lose! Scissors  beats Paper");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore += 1;
    console.log("You lose! Paper beats Rock");
  } else {
    console.log("Same result! Draw");
  }
  console.log(`Computer score: ${computerScore} || Human score: ${humanScore}`);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`For round ${i}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(
      `Computer chose ${computerSelection} and Human chose ${humanSelection}`,
    );
    playRound(humanSelection, computerSelection);
  }
}

playGame();
