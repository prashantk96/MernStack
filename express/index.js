const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

const pathdir = path.join(__dirname,'public')

app.use(express.static(pathdir));

app.get('/', (req, res) =>{
     res.sendFile(`${pathdir}/index.html`);
    });

app.get('/about', (req, res) =>{
    res.sendFile(`${pathdir}/home.html`)});

app.get('/download', (req, res) =>{
    res.download(`${pathdir}/index.html`)});

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)});
