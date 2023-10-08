let myNumber = 16;
console.log("This is my number as an integer: " + myNumber);
let binary = "";

while (myNumber >0){
  if (myNumber%2 ==0){
    binary += "0";
  }
  else{
    binary += "1";
  }
  myNumber = Math.floor(myNumber/2);
}

console.log("This is the binary number: " + binary);