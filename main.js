let playerPoints = 0;
let computerPoints = 0;
let round = 1;

playerPoints = 0;
computerPoints = 0;

const choices = document.querySelectorAll('.img');
choices.forEach((e) => {
    e.addEventListener('click', getPlayerChoice)
})


const result = document.querySelector("#result");
const info = document.querySelector(".info>p")

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
    return Math.floor(Math.random() * 3)
}

function getPlayerChoice() {

    choices.forEach((e) => {
        e.classList.remove('chosen', 'playerWin', 'playerLose', 'draw')
    })

    result.textContent = (`Round ${round}!`);
    this.classList.add('chosen');
    let playerChoice = this.id;
    round++;

    return playRound(playerChoice, getComputerChoice(getRandomInt))
}

function winRound(a, b) {
    playerPoints++;
    info.textContent = (`You Win! ${a} beats ${b}`)
    game();
    document.querySelector(`#${b}`).classList.add("playerWin")
}
function loseRound(a, b) {
    computerPoints++;
    info.textContent = (`You Lose! ${b} beats ${a}`)
    document.querySelector(`#${b}`).classList.add("playerLose")
    game();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        info.textContent = (`You both chose ${playerSelection}. Try again!`)
        document.querySelector(`#${computerSelection}`).classList.add("draw")
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return loseRound(playerSelection, computerSelection)
        }
        else return winRound(playerSelection, computerSelection)
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return loseRound(playerSelection, computerSelection)
        }
        else return winRound(playerSelection, computerSelection)
    }
    else {
        if (computerSelection === 'ROCK') {
            return loseRound(playerSelection, computerSelection)
        }
        else return winRound(playerSelection, computerSelection)
    }
}


function game() {
    console.log(playerPoints, computerPoints)

    if (playerPoints === 5 || computerPoints === 5) {

        if (computerPoints === playerPoints) {
            console.log(`It\'s a draw ${playerPoints} : ${computerPoints}`)
        }
        else if (computerPoints > playerPoints) {
            console.log(`You Lose a Game! ${playerPoints} : ${computerPoints}`)
        }
        else console.log(`You Won a Game! ${playerPoints} : ${computerPoints}`)
    }
    else return;
}


