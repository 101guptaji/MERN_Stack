/*
    Objective: Create a Node.js HTTP server that responds to GET and POST requests.
    
    Requirements:
        Create a new Node.js project using npm init.
        Create a file called server.js.
        Use the http module to create an HTTP server.
        Handle GET requests and respond with a message.
        Handle POST requests and respond with the request body.
*/
const http = require('http');
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);

    // reading data from file
    let data = fs.readFileSync("users.json", "utf-8");

    if (req.method === 'GET' && parsedUrl.pathname === "/users") {

        if (parsedUrl.query.id != undefined) {
            // json to object array
            let users = JSON.parse(data);

            let user = users.find((item) => item.id == parsedUrl.query.id);
            if (user != undefined) {
                // Coverting back to JSON
                res.end(JSON.stringify(user));
            }
            else
                res.end("User not found");
        }
        else
            res.end(data);
    }
    else if (req.method === 'POST') {
        let user = '';
        req.on('data', (chunk) => {
            user += chunk;
        });

        req.on('end', () => {
            // json to object array
            let users = JSON.parse(data);
            let newUser = JSON.parse(user);

            users.push(newUser);

            fs.writeFile("users.json", JSON.stringify(users), (err) => {
                if (err)
                    console.error(err);
                else
                    res.end(`Received: ${user}`);
            })
        });
    }
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});