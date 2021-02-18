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







const computerChoice = computerChoice();
const playerChoice= promptPlayer();