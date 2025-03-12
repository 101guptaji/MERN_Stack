const http = require("http")

const fs = require("fs");

http.createServer((req, res)=>{
    // reading data from file
    let users = fs.readFileSync("users.json");

    // wrting data to response
    res.writeHead(200, {"content-type":"application/json"}) // status code = 200 (Ok)
    res.end(users);
})
.listen(8080, () => {
    console.log('API is http://localhost:8080');
});



