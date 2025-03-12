var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url); // req.url holds the part of the URL after the domain name.
    res.end();
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/test');
});
