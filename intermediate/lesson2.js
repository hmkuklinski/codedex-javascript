
const forceEquation1 = (mass, acceleration) =>{
    return mass*acceleration;
  }
  const forceEquation2 =(mass,acceleration) => (mass*acceleration);
  
  console.log("Result with arrow function:", forceEquation1(3, 4));
  console.log("Result with arrow function (implied return):" ,forceEquation2(3, 4));
  