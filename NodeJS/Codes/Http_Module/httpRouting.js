const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("<h1>Home Page</h1>");
    }
    else if(req.url === "/about"){
        res.write("<h1>About Page</h1>");
    }
    else if(req.url === "/contact"){
        res.write("<h1>Contact Page</h1>");
    }
    else if(req.url === "/services"){
        res.write("<h1>Service Page</h1>");
    }
    else{
        res.write("<h1>404, Page not found!</h1>");
    }
    
    res.end();
});

server.listen(8080);