// Write code below 💖

const animal = {
    name: "Porky",
    type: "pig",
    age: 4,
    makeSound(){
      let sound= "OINK OINK"
      return (animal.name + " is a " + animal.age + " year old " + animal.type + " that goes " + sound);
    }
  }
  
  const animalTwo = {
    name: "Pluto",
    type: "dog",
    age: 2,
    makeSound(){
      let sound= "woof woof!"
      return (animalTwo.name + " is a " + animalTwo.age + " year old " + animalTwo.type + " that goes " + sound);
    }
  }
  
  const animalThree = {
    name: "Baaab",
    type: "sheep",
    age: 8,
    makeSound(){
      let sound= "BAAAAA!"
      return (animalThree.name + " is a " + animalThree.age + " year old " + animalThree.type + " that goes " + sound);
    }
  }
  
  console.log(animal.makeSound());
  console.log(animalTwo.makeSound());
  console.log(animalThree.makeSound());