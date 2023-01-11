function getComputerChoice() {
let computerChoices = ["rock", "paper", "scissors"];
let random =  Math.floor((Math.random() * computerChoices.length)); //multiplies random decimal b/t 0 and 1 by array length (3), then rounds down to whole number
let computerSelection = computerChoices[random]; //uses whole number form previous line (1, 2 or 3) to pick string from array with corresponding position
return computerSelection.toLowerCase
}
 



function game (playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return "That's a tie!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win!"
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win!"
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose"
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose"
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win!"
    }}

let computerSelection = getComputerChoice()