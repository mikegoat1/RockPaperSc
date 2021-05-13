var wins = 0; 
var losses = 0; 
var ties = 0; 
var myChoice = prompt("Enter rock, paper, or scissors.");
var computerChoice = ["rock", "paper", "scissors"];

var randomIndex = Math.floor(Math.random()*3);

var randomChoice = computerChoice[randomIndex];

