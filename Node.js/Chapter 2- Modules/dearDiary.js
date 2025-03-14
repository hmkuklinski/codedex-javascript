const fs = require("fs");

//added placeholder for the actual path:
fs.readFile('/path/seventh-grade.txt', 'utf8', (err,data)=>{
    if(err){
        console.error("There was an error: ", err);
        return;
    }
    console.log(data);
});