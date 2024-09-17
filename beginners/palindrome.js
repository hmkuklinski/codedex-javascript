// Write code below 💖

function isPalindrome(word){
    word = word.toLowerCase();
    for (let i=0, j=word.length-1; i<word.length-1;i++){
      let checkerOne= word.charAt(i); //left bound checker
      let checkerTwo= word.charAt(j) //right bound checker
      if (i == j){ //both index values are the same, in same location
        return true;
      }
      if (checkerOne != checkerTwo){ //if the characters at the two checkpoints aren't the same, not palindrome
        return false;
      }
      j--; //moves the right bound checker over one to the left after the initial check is completed.
    }
  }
  
  //check racecar
  let racecar=isPalindrome("racecar");
  if (racecar){
    console.log("Racecar is a palindrome");
  }
  else{
    console.log("Racecar is NOT a palindrome");
  }
  
  //check madam
  let madam= isPalindrome("madam");
  if (madam){
    console.log("Madam is a palindrome");
  }
  else{
    console.log("Madam is NOT a palindrome");
  }
  
  //check moonlight
  let moonlight= isPalindrome("moonlight");
  if (moonlight){
    console.log("Moonlight is a palindrome");
  }
  else{
    console.log("Moonlight is NOT a palindrome");
  }
  
  //check aviary
  let aviary= isPalindrome("aviary");
  if (aviary){
    console.log("Aviary is a palindrome");
  }
  else{
    console.log("Aviary is NOT a palindrome");
  }