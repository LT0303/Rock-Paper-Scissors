let computerChoice = '';

let getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 9) + 1;
    switch (randNum) {
        case 1, 2, 3:
            computerChoice = 'rock';
            break;
        case 4, 5, 6:
            computerChoice = 'paper';
            break;
        case 7, 8, 9:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

let playerChoice = prompt('Enter rock, paper, or scissors');