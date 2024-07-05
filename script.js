let computerScore = 0;
let humanScore = 0;

while(computerScore < 5 && humanScore < 5) {
    function getComputerChoice() {
        let random = Math.random() * 3;
        let computerChoice;
        if (random < 1) {
            computerChoice = 'rock';
        } else if (random < 2 && random > 1) {
            computerChoice = 'paper';
        } else if (random > 2) {
            computerChoice = 'scissors';
        }
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("Enter your choice: ").toLowerCase();
        return humanChoice;
    }

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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore === 5) {
        console.log("Human wins the game!");
        alert("Human Wins!!!!!!")
    } else if (computerScore === 5){
        console.log("Computer wins the game!");
        alert("Computer Wins!!!!!")
    }
}