//rock = 0, paper =1 , scissors =2

let computer = Math.floor(Math.random()*3);
let userSelection = 2;
let userName = "";
let computerName = "";

if (computer==0){
  computerName = "Rock";
}
else if (computer == 1){
  computerName = "Paper";
}
else if (computer == 2){
  computerName= "Scissors";
}

if (userSelection == 0){
  userName="rock";
}
else if (userSelection == 1){
  userName = "paper";
}

else if (userSelection == 2){
  userName="scissors"
}

console.log("Player picked: \t\t" + userName);
console.log("Computer picked: \t" + computerName);

if (userSelection == 0 && computer ==2 || userSelection == 1 && computer == 0 || userSelection ==2 && computer ==1){
  console.log("The player won!");
}

else if (userSelection == 0 && computer ==0 || userSelection ==1 && computer == 1 || userSelection == 2 && computer ==2){
  console.log("It's a tie.")
}

else{
  console.log("The computer won! ");
}