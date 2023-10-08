// Write code below 💖
const luckyNumber = 3;
let guess = Math.floor(Math.random()*10)+1;

while (guess !=luckyNumber){
  let guess = Math.floor(Math.random()*10)+1;
  console.log("Nope, it isn't " + guess);
}

console.log("My lucky number is " + luckyNumber);