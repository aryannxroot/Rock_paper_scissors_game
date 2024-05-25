let userChoice ;
let computerChoice ;
let userTotal = 0;
let computerTotal = 0;

document.getElementById("rock-button").addEventListener("click", () => {
    userChoice = "rock";
    let compnum = Math.floor(Math.random()*3);

switch (compnum) {
    case 0:
        computerChoice = "rock";
        break;
    case 1:
        computerChoice = "paper";
        break;
    case 2:
        computerChoice = "scissors";
        break;
}

if(userChoice === computerChoice){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. It's a tie!`);
}

else if(userChoice === "rock" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "rock" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}

console.log(`Your total is ${userTotal} and the computer's total is ${computerTotal}`);
document.getElementById("user-choice").innerHTML = userChoice;
document.getElementById("computer-choice").innerHTML = computerChoice;
document.getElementById("user-total").innerHTML = userTotal;
document.getElementById("computer-total").innerHTML = computerTotal;
})
document.getElementById("paper-button").addEventListener("click", () => {
    userChoice = "paper";
    let compnum = Math.floor(Math.random()*3);

switch (compnum) {
    case 0:
        computerChoice = "rock";
        break;
    case 1:
        computerChoice = "paper";
        break;
    case 2:
        computerChoice = "scissors";
        break;
}

if(userChoice === computerChoice){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. It's a tie!`);
}

else if(userChoice === "rock" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "rock" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}

console.log(`Your total is ${userTotal} and the computer's total is ${computerTotal}`);
document.getElementById("user-choice").innerHTML = userChoice;
document.getElementById("computer-choice").innerHTML = computerChoice;
document.getElementById("user-total").innerHTML = userTotal;
document.getElementById("computer-total").innerHTML = computerTotal;
})
document.getElementById("scissors-button").addEventListener("click", () => {
    userChoice = "scissors";
    let compnum = Math.floor(Math.random()*3);

switch (compnum) {
    case 0:
        computerChoice = "rock";
        break;
    case 1:
        computerChoice = "paper";
        break;
    case 2:
        computerChoice = "scissors";
        break;
}

if(userChoice === computerChoice){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. It's a tie!`);
}

else if(userChoice === "rock" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "rock" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "paper" && computerChoice === "scissors"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "paper"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. You win!`);
    userTotal += 1;
}
else if(userChoice === "scissors" && computerChoice === "rock"){
    console.log(`You picked ${userChoice} and the computer picked ${computerChoice}. The computer wins!`);
    computerTotal += 1;
}

console.log(`Your total is ${userTotal} and the computer's total is ${computerTotal}`);
document.getElementById("user-choice").innerHTML = userChoice;
document.getElementById("computer-choice").innerHTML = computerChoice;
document.getElementById("user-total").innerHTML = userTotal;
document.getElementById("computer-total").innerHTML = computerTotal;
})


