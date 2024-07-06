/*
Rock Paper Scissors game for the Odin Project
 */

// Game Scores
let computerScore = 0;
let humanScore = 0;

// Game constants
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const WINNING_SCORE = 5;

// Get the computer's choice
function getComputerChoice() {
    const random = Math.random() * 3;
    if (random < 1) {
        return ROCK;
    } else if (random < 2 && random > 1) {
        return PAPER;
    } else if (random > 2) {
        return SCISSORS;
    }
}

// Get the human's choice
function getHumanChoice() {
    return prompt("Enter your choice: ").toLowerCase();
}

// Play a round and update scores
function playRound(humanChoice, computerChoice) {
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log("Human Wins!!! | Score: Human: " + humanScore + " Computer: " + computerScore);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log("Human Wins!!! | Score: Human: " + humanScore + " Computer: " + computerScore);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log("Human Wins!!! | Score: Human: " + humanScore + " Computer: " + computerScore);
    } else if (humanChoice === computerChoice) {
        console.log("Tie!")
    }
}

// Main game loop
while (computerScore < WINNING_SCORE && humanScore < WINNING_SCORE) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

// Display final result
if (humanScore === 5) {
    console.log("Human wins the game!");
    alert("Human Wins!!!!!!")
} else if (computerScore === 5){
    console.log("Computer wins the game!");
    alert("Computer Wins!!!!!")
}
