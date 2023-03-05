const { request } = require("express");
const express = require("express");
const router = express.Router();
const middleware = require("./middleware");

// router.use(middleware);//will apply on all routs.
router.get("/",middleware, (req, res) => { //this will aply on `/` page
  console.log(req.query);//to get response of client what types in url
    //  res.sendFile(`${pathdir}/index.html`);
    res.render("index",{
      title:"index"
    })
  });
  
  router.get("/about", (req, res) => {
    // res.sendFile(`${pathdir}/home.html`)
    res.render("home",{
      title:"home"
  });      
  }); 
  
  router.get("/download", (req, res) => {
    //   res.download(`${pathdir}/index.ejs`)
  
  });
 
  module.exports = router;