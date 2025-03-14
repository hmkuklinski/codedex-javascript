
const fs = require('fs');
const message = "⋆˚✿˖° Hello, world! It's bright and sunny out today. ₊✩‧₊˚౨ৎ˚₊✩‧₊";

//added placeholder for the actual path:
fs.writeFile('/path/seventh-grade.txt', message, 'utf8', (err, data) => {
  if (err) {
    console.error("Error writing file", err);
    return;
  }else{
    console.log("Success!");
  }
});
