const fs = require("fs");

fs.unlink("/path/seventh-grade.txt", (err)=>{
    if (err){
        console.error("Error deleting the diary entry: ", err);
        return;
    }
    console.log("Entry deleted");
})