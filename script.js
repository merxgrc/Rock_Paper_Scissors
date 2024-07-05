let computerScore = 0;
let humanScore = 0;

while(computerScore < 5 && humanScore < 5) {
    function getComputerChoice() {
        let random = Math.random() * 3;
        let computerChoice;
        if (random < 1) {
            computerChoice = 'Rock';
        } else if (random < 2 && random > 1) {
            computerChoice = 'Paper';
        } else if (random > 2) {
            computerChoice = 'Scissors';
        }
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("Enter your choice: ");
        return humanChoice;
    }

    function playRound(humanChoice, computerChoice) {
        console.log("Human: " + humanChoice)
        console.log("Computer: " + computerChoice)

        if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            humanScore += 1;
            console.log("Human Wins!!! | Score: Human: " + humanScore + " Computer: " + computerScore);
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            computerScore += 1;
            console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            humanScore += 1;
            console.log("Human Wins!!! | Score: Human: " + humanScore + " Computer: " + computerScore);
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            computerScore += 1;
            console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            computerScore += 1;
            console.log("Computer Wins!!! | Score: Computer: " + computerScore + " Human: " + humanScore)
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
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