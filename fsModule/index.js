const fs = require('fs');

const b = fs.writeFile("file2.txt","hey there!",(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("file has successfully writen");
    }

})
console.log(b);