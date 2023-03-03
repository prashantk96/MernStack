const fs = require("fs");

fs.unlink("file.txt",() =>{
    console.log("file has been removed,")
})