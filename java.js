var wins = 0;
var losses = 0;
var ties = 0;
alert("Lets play a game.")
var myChoice = prompt("Enter r, p, or s.");
var computerChoice = ["r", "p", "s"];
var yes;
// random choice of computer
var randomIndex = Math.floor(Math.random() * 3);
var randomChoice = computerChoice[randomIndex];

if (myChoice === "r" && randomChoice === "p") {
    losses++;
    alert(wins, losses, ties);
    yes = confirm("Do you want to loose again?");

    if (yes) {
        prompt("Enter r, p, or s.");
    }
} else if (myChoice === "p" && randomChoice === "s") {
    losses++;
    alert(wins, losses, ties);
    yes = confirm("Do you want to loose again?");

    if (yes) {
        prompt("Enter r, p, or s.");
    }
} else if (myChoice === "s" && randomChoice === "r") {
    losses++;
    alert(wins, losses, ties);
    yes = confirm("Do you want to loose again?");

    if (yes) {
        prompt("Enter r, p, or s.");
    }
} else {
    wins++;
    alert(wins, losses, ties);
    yes = confirm("Are you feeling lucky?");
    if (yes) {
        prompt("Enter r, p, or s.");
    }
}