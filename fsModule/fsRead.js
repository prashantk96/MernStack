const fs = require("fs");

const d = fs.readFile("file.txt","utf-8",function(err,data) {
    console.log(data);
   
    })
    console.log(d);