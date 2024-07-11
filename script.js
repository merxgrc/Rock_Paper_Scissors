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


// Play a round and update scores
function playRound(humanChoice, computerChoice) {
    console.log("Human: " + humanChoice)
    console.log("Computer: " + computerChoice)

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Human: ${humanChoice} <br> Computer: ${computerChoice} <br>`;

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        resultDiv.innerHTML += `Human Wins!!! | Score: Human: " ${humanScore} " Computer: " ${computerScore}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        resultDiv.innerHTML += `Computer Wins!!! | Score: Computer: " ${computerScore} " Human: " ${humanScore}`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        resultDiv.innerHTML += `Human Wins!!! | Score: Human: " ${humanScore} " Computer: " ${computerScore}`;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        resultDiv.innerHTML += `Computer Wins!!! | Score: Computer: " ${computerScore} " Human: " ${humanScore}`;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        resultDiv.innerHTML += `Computer Wins!!! | Score: Computer: " ${computerScore} " Human: " ${humanScore}`;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        resultDiv.innerHTML += `Human Wins!!! | Score: Human: " ${humanScore} " Computer: " ${computerScore}`;
    } else if (humanChoice === computerChoice) {
        resultDiv.innerHTML += 'Tie!';
    }

    checkForWinner();

}

function checkForWinner() {
    const gameOver = document.getElementById("game-over");
// Display final result
    if (humanScore === WINNING_SCORE) {
        gameOver.innerHTML += `Human wins the game!`;
    } else if (computerScore === WINNING_SCORE){
        gameOver.innerHTML += `Computer wins the game!`;
    }
}


