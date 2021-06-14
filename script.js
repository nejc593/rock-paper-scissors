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

function fullRound(playerChoice, computersChoice) {
    console.log("Computer choice: ", computersChoice)
    debugger;
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




function determineWhoWon(score) {
    if (currentRound >= 5) {
        if (score < 0) {
            finishResultElem.textContent = "You lost. your score was: " + score.toString();
        } else {
            finishResultElem.textContent = "you won your score was: " + score.toString();
        }
        return "The game is done"
    }


}
function resetGame() {
    currentRound = 0;
    score = 0;
    currentRoundElem.textContent = currentRound;
    finishResultElem.textContent = "Result: ";
}




//const playerChoice = promptPlayer();
//const score = fullGame();
//console.log(determineWhoWon(score));
let currentRoundElem = document.querySelector(".currentRound");

let finishResultElem = document.querySelector(".finishResult");



let currentRound = 0;
let score = 0;

let rock = document.querySelector("button.rock");

rock.addEventListener("click", () => {
    const computersChoice = computerChoice();
    if (currentRound < 5) {
        currentRound++;
        currentRoundElem.textContent = "Round: " + currentRound;
    }
    score += fullRound("rock", computersChoice);
    determineWhoWon(score);
})
let paper = document.querySelector("button.paper");

paper.addEventListener("click", () => {
    const computersChoice = computerChoice();
    if (currentRound < 5) {
        currentRound++;
        currentRoundElem.textContent = "Round: " + currentRound;

    }
    if (currentRound == 5) {
        score += fullRound("paper", computersChoice);
    }
    determineWhoWon(score);
});
let scissors = document.querySelector("button.scissors")
scissors.addEventListener("click", () => {
    const computersChoice = computerChoice();
    if (currentRound < 5) {
        currentRound++;
        currentRoundElem.textContent = "Round: " + currentRound;
    }
    score += fullRound("scissors", computersChoice)
    determineWhoWon(score);
});