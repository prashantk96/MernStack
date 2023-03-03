const http = require("http");
const fs = require("fs");

const server = http.createServer((req,resp) => {

    const jsonData = fs.readFileSync("api.json", "utf-8");
    const objData = JSON.parse(jsonData);


    if(req.url==="/"){
        resp.end("this is my first node js server.");
    }
    else if(req.url ==="/downloads"){
    resp.end("this is my first download page.");
    }
    else if(req.url ==="/about"){
        resp.end(objData[0].address.suite);
    }
    else{
        resp.end("404:page not found");
    }
});

server.listen(3000,() => {
    console.log("server is listning on port no 3000");
});