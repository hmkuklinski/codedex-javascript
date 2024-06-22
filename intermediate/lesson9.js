function randomNumberPromise(){
    const randomNum = Math.floor(Math.random()*10)+1;
  
    return new Promises((resolve,reject)=>{
      if (randomNum <5){
        resolve();
      }
      else{
        reject("Error");
      }
    });
  }
  
  const generateBtn = document.getElementById("generateButton");
  
  generateBtn.addEventListener("click", randomNumberPromise);
  