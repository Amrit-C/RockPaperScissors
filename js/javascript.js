function computerPlay () {
    let compChoice = Math.floor(Math.random()*3)+1; 
    
    if (compChoice == 1){
        return "Rock";
    }
    else if (compChoice == 2){
        return "Paper";
    }
        return "Scissors";
}

function playRound (playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase(); //case-insensitive
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice){ //Tie Cases
        return "It was a tie! Please play again."
    }


    if (playerChoice == 'rock'){
        if (computerChoice == 'paper'){
            return "You Lose! Paper beats Rock.";
        }
        return "You Win! Rock beats Scissors.";
    }

    if (playerChoice == 'paper'){
        if (computerChoice == 'rock'){
            return "You Win! Paper beats Rock.";
        }
        return "You Lose! Scissors beats Paper.";
    }

    if (playerChoice == 'scissors'){
        if (computerChoice == 'rock'){
            return "You Lose! Rock beats Scissors.";
        }
        return "You Win! Scissors beats Paper.";
    }

return "Not a valid input." //if rock, paper or scissors was not entered properly 

}

function game (){
    let playerScore = 0; //counters for game results
    let computerScore = 0; 

    for (let i = 0; i<5; i++){
        let playerInput = prompt("Rock, Paper or Scissors?"); //input from user - player's selection 
        let computerInput = computerPlay();

        console.log(playRound(playerInput, computerInput)); //result from each round

        if (playRound(playerInput, computerInput)[4] == "W"){ //counter(s) incremented if round was won 
            playerScore += 1;
        }
        else if (playRound(playerInput, computerInput)[4] == "L"){
            computerScore += 1; 
        }
    }

    if (playerScore > computerScore){ //game results
        return "You won the game!";
    }
    if (computerScore > playerScore){
        return "You lost the game.";
    }

    return "It was a tie game. Nobody won.";

}

const playerSelection = "paper";
const computerSelection = computerPlay();