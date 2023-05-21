function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 9) + 1;
    let computerChoice = '';
    switch (randNum) {
        case 1: 
        case 2: 
        case 3:
            computerChoice = 'rock';
            break;
        case 4:
        case 5: 
        case 6:
            computerChoice = 'paper';
            break;
        case 7: 
        case 8: 
        case 9:
            computerChoice = 'scissors';
            break;
    };

    return computerChoice;
}

const computerChoice = getComputerChoice();
const playerChoice = prompt('Enter rock, paper, or scissors').toLowerCase();


function checkAnswer (playerChoice) {
    let validChoice = false;
    while (!validChoice) {
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            validChoice = true;
            break;
        } else {
            playerChoice = prompt(`You entered an invalid move! Please enter rock, paper, or scissors.`).toLowerCase;
        }
    }
}

function game (playerChoice, computerChoice) {
    checkAnswer(playerChoice);
    if (playerChoice === computerChoice) {
        alert('You won!');
    } else {
        alert('You lose!');
    }
}
game(playerChoice, computerChoice);
