function getComputerChoice(){
    const choice=["rock", "paper", "scissors"];
    let index= Math.floor(Math.random()*3);
    return choice[index];
}
function getHumanChoice(){
    let choice= prompt("Enter rock, paper, scissors:");
    if(!choice){
        return getHumanChoice();
    }
    choice=choice.toLowerCase();

    if (choice==="rock" || choice==="paper" || choice==="scissors"){
        return choice;
    }
    else{
        console.log("Invalid choice!");
        return getHumanChoice();
    }
}
let humanScore = 0;
let computerScore = 0;
function playRound(){
    let computer = getComputerChoice();
    let human = getHumanChoice();
    console.log("Computer:" , computer);
    console.log("Human: ", human);
    if (computer === human){
        console.log("Draw");
    }
    else if (computer === "rock" && human === "scissors"){
        console.log("You lose");
        computerScore++;
    }
    else if (computer === "scissors" && human === "rock"){
        console.log("You win");
        humanScore++
    }
    else if (computer === "rock" && human === "paper"){
        console.log("You win");
        humanScore++
    }
    else if (computer === "paper" && human === "rock"){
        console.log("You lose");
        computerScore++;
    }
    else if (computer === "paper" && human === "scissors"){
        console.log("You win");
        humanScore++
    }
    else {
        console.log("You lose");
        computerScore++;
    }
    console.log("Score-> Human: " + humanScore + "| Computer: " + computerScore)
}
function game(){
    for(let i=1; i<6; i++){
        console.log("Round " + i);
        playRound();
    }
    if(computerScore>humanScore){
        console.log("Computer has won the game");
    }
    else if(computerScore<humanScore){
        console.log("You have won the game");
    }
    else{
        console.log("It's a tie");
    }
}
game();