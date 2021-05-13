var wins = 0; 
var losses = 0; 
var ties = 0; 
var myChoice = prompt("Enter r, p, or s.");
var computerChoice = ["r", "p", "s"];

// random choice of computer
var randomIndex = Math.floor(Math.random()*3);
var randomChoice = computerChoice[randomIndex];

if(myChoice === "r" && randomChoice === "p"){
    losses++; 
}