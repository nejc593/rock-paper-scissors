function promptPlayer() {
    return prompt("Do you choose rock, paper or scissors ?");

}

function computerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function round(playerChoice, computerChoice) {
    if (playerChoice == computersChoice) {
        console.log("It's a tie!");
        return 0;
    } else if ((playerChoice == "rock" && computersChoice == "paper") || (playerChoice == "paper" && computersChoice == "scissors") || (playerChoice == "scissors" && computersChoice == "rock")) {
        console.log("You Lose! " + computersChoice + " beats " + playerChoice);
        return -1;
    } else {
        console.log("You Win! " + playerChoice + " beats " + computersChoice);
        return 1;
    }

}

function fullGame() {
    let score = 0;
    for (i = 0; i < 5; i++) {
        let playerChoice = promptPlayer();
        score += round(playerChoice, computerChoice());
    }
    return score;
}

function determineWhoWon(score) {
    if (score < 0) {
        console.log("You lost. your score was: " + score);
    } else {
        console.log("you won your score was: " + score);
    }
    return "The game is done"

}




const computersChoice = computerChoice();
const playerChoice = promptPlayer();
const score = fullGame();
console.log(determineWhoWon(score));