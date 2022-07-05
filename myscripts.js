// Create a function called computerPlay
//function has computerPlay randomly return "Rock" "Paper" "Scissors"
//Have mathrandom function return a number from 0-2 and use if else statements to associate each with rock paper or scicsosrs
//0 is rock 1 is paper 2 is scissors
let computerScore = 0;
let playerScore = 0;
function playRound() {
    function computerPlay() {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            computerSelection = "rock"
        }
        if (randomNumber === 1) {
            computerSelection = "scissors"
        }
        if (randomNumber === 2) {
            computerSelection = "paper"
        }
        console.log("The Computer Chose", computerSelection);
    }
    console.log(computerPlay());

    //Create a function that takes the parameter playerSelection and computerSelection

    var playerSelection = window.prompt("Rock, Paper or Scissors? : ").toLowerCase();
    console.log("You chose", playerSelection);

    //Return a string that declares teh winner of the round like "You Lose! Paper beats Rock"
    var result = "Error! You did not pick Rock Paper or Scissors!";
    function getResult() {
        if (computerSelection === playerSelection) {
            result = "It's a draw!"
        }
        if (computerSelection === "rock" && playerSelection === "paper") {
            result = "You win this!"
            playerScore++;
        }
        if (computerSelection === "rock" && playerSelection === "scissors") {
            result = "You lose this round!"
            computerScore++;
        }
        if (computerSelection === "paper" && playerSelection === "scissors") {
            result = "You win this round!"
            playerScore++;
        }
        if (computerSelection === "paper" && playerSelection === "rock") {
            result = "You lose this round!"
            computerScore++;
        }
        if (computerSelection === "scissors" && playerSelection === "rock") {
            result = "You win this round!"
            playerScore++;
        }
        if (computerSelection === "scissors" && playerSelection === "paper") {
            result = "You lose this round!"
            computerScore++;
        }
        return(result, playerScore, computerScore);
        console.log(result)
        
        
    }
    return (getResult())
}
//First declare the scores of both the playerSelection and the computerSelection. After declaring both of those scores, we want to create a loop that plays 5 rounds and that tells who the winner is 

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("The player score is ", playerScore)
        console.log("The computer score is ", computerScore)
    }
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }
    if (playerScore === computerScore) {
        console.log("The game is a draw!")
    }
    if (playerScore < computerScore) {
        console.log("You lost the game!")
    }

}
console.log(game(playRound));
//write a function called game()
//put playRound function inside of thius one to play a 5 round game, that keeps score and reports a winner at the end.