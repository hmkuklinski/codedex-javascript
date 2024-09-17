for(let i=1;i<16;i++){
    if (i%3 == 0){ //check for fizz
        if (i%5==0){ //check for fizzbuzz
            console.log("FizzBuzz");
        }
        else{ 
            console.log("Fizz");
        }
    }
    else if (i%5==0){ //check for buzz
        console.log("Buzz");
    }
    else{ //neither fizz, buzz, nor fizzbuzz
        console.log(i);
    }
}