const express = require("express");
const { join } = require("path");
const path = require("path");
const app = express();
const port = 3001;

const pathdir = path.join(__dirname,'views')
app.use(express.static(pathdir));

app.set("view engine", "ejs");
console.log(app.get("view engine"));
console.log(path.join(__dirname), "views");

app.get("/", (req, res) => {
  //  res.sendFile(`${pathdir}/index.html`);
  res.render("index",{
    title:"index"
  })
});

app.get("/about", (req, res) => {
  // res.sendFile(`${pathdir}/home.html`)
  res.render("home",{
    title:"home"
});      
}); 

app.get("/download", (req, res) => {
    res.download(`${pathdir}/index.ejs`)

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
