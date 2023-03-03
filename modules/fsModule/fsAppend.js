const fs = require("fs");

const c = fs.appendFile("file.txt"," How are you?",(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("file has been appended");
    }
    console.log(c);
})