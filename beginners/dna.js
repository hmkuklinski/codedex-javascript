// Write code below 💖
let myDNA= [];
const dnaPieces = ["A", "C", "G", "T"];
let counter = 0;
for (i=0; i<24; i++){ //gives us 24 tuples
  let dnaSegment = " "; //start with an empty tuple
  for (j=0;j<3;j++){
    let randomNumber = Math.floor(Math.random()*4); //random 0-3
    let randomDNASegment = dnaPieces[randomNumber]; //uses index to determine which basepair is added
    dnaSegment += randomDNASegment; //adds the random basepair to the existing tuple
  }
  myDNA.push(dnaSegment); //adds tuple to the myDNA array

}

console.log(myDNA);