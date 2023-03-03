const fs = require("fs");

getCurrentFileNames();

fs.rename("Read.txt","Rename.txt",() => {
    console.log("\nfile renamed\n");

    getCurrentFileNames();
})  

function getCurrentFileNames() {
    console.log("current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    })
}