function getComputerChoice(callback) {
    if (callback() === 0) {
        return "ROCK";
    }
    else if (callback() === 1) {
        return "PAPER"
    }
    else return "SCISSORS"
}

function getRandomInt() {
    return Math.floor(Math.random()*3)
}

function getPlayerChoice() {
    let playerSelection = prompt("Please enter: Rock, Paper or Scissors");
    return playerSelection.toUpperCase();
}

function winRound(a,b) {
    console.log(`You Win! ${a} beats ${b}`)
}
function loseRound(a,b) {
    console.log(`You Lose! ${b} beats ${a}`)
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}. Try again!`)
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
    else {
        if (computerSelection=== 'ROCK') {
            return loseRound(playerSelection,computerSelection)
        }
        else return winRound(playerSelection,computerSelection)
    }
}

playRound(getPlayerChoice(),getComputerChoice(getRandomInt))