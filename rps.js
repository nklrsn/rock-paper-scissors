function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");

    switch (choice.toLowerCase()) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors"
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("It's a tie. Nobody wins.");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else {
                console.log("You win. Rock beats Scissors.");
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("It's a tie. Nobody wins.");
            } else {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            }
        } else {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            } else {
                console.log("It's a tie. Nobody wins.");
            }
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();