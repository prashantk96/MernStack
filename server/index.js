const http = require("http");
const server = http.createServer((req,resp) => {
    if(req.url=="/"){
        resp.end("this is my first node js server.");
    }
    else if(req.url =="/downloads"){
    resp.end("this is my first download page.");
    }
    else if(req.url =="/blog"){
        resp.end("this is my first blog page.");
    }
    else{
        resp.end("404:page not found");
    }
});

server.listen(3000,() => {
    console.log("server is listning on port no 3000");
});