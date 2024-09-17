// Write code below 💖

const car={
    "model": "Tesla",
    "year": 2023,
    "color": "red",
    "new": true
  }
  
  //uses boolean value to return useful text
  let carNewStatement= "";
  if (car.new){
    carNewStatement =" that is new.";
  }
  else{
    carNewStatement = " that is old."
  }
  
  //print statement using these key values
  console.log("I'm looking for a " + car.year + " "+ car.model + carNewStatement);
  