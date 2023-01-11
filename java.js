function getComputerChoice() {
let computerChoices = ["rock", "paper", "scissors"];
let random =  Math.floor((Math.random() * computerChoices.length)); //multiplies random decimal b/t 0 and 1 by array length (3), then rounds down to whole number
let computerSelection = computerChoices[random]; //uses whole number form previous line (1, 2 or 3) to pick string from array with corresponding position
return computerSelection
}
 
let computerSelection = getComputerChoice()

function playRound (playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return "That's a tie!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose, paper beats rock!"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win, rock beats scissors!"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win, paper beats rock!"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose, scissors beat paper!"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose, rock beats scissors"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win, scissors beat paper!"
    }}

const playerChoice = "PAPER";
const playerSelection = playerChoice.toLowerCase();
console.log(playRound(playerSelection, computerSelection));