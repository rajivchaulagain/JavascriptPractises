const result = document.getElementById("result");
const totalResult = document.getElementById("total-result");
const selection = document.getElementById("selection");

let ties = 0;
let computerWins = 0;
let useWins= 0;

function userEvent(event){
    const possibleOutcomes = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * possibleOutcomes.length);
    let randomOutcome = possibleOutcomes[randomIndex];
    selection.innerHTML = `You selected : <img src="./images/${event}.png"> , Computer Selected : <img src="./images/${randomOutcome}.png">`
    if(event === randomOutcome){
        ties++
        totalResult.innerText = `Ties : ${ties} , You wins : ${useWins} , computer wins : ${computerWins} `
        result.innerText = "Ties";
    }
    else if(event === 'rock' && randomOutcome === "scissors" || event === "paper" && randomOutcome === "rock" || event === "scissors" && randomOutcome === "paper"){
        useWins++
        totalResult.innerText = `Ties : ${ties} , You wins : ${useWins} , computer wins : ${computerWins} `
        result.innerText = "You won";
    }
    else{
        computerWins++
        totalResult.innerText = `Ties : ${ties} , You wins : ${useWins} , computer wins : ${computerWins} `
        result.innerText = "Computer won";
    }
}
