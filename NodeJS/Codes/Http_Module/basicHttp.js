const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("Hello, Server is on");
    res.end();
});

server.listen(7000);