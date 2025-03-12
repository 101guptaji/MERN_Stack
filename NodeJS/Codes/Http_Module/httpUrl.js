/*
    Adding an HTTP Header
    Adding an HTTP header, especially the Content-Type header, helps inform the client (usually the browser)
     about the type of content the server is sending. This is important for proper rendering of the response.

    If the Content-Type is set to text/html, the browser knows that the response is an HTML document and can render it accordingly.
    If the Content-Type is set to application/json, the browser or client knows the response is in JSON format and can parse it as such.
*/
const http = require("http");

const  url = require("url");

http.createServer(function(req, res){
    let  q = url.parse(req.url, true).query;
    let contentType = 'text/html';

    if(q.json){
        contentType = 'application/json';
    }

    res.writeHead(200, {'content-type': contentType});

    if (contentType === 'text/html') {
        res.write('<html><body><h1>Hello, World!</h1></body></html>');
    } else if (contentType === 'application/json') {
        res.write(JSON.stringify({ message: "Hello, World!" }));
    }
    res.end();
})
.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


/*
    When you visit http://localhost:3000/, the server will respond with an HTML page.
    The HTTP header will be set as Content-Type: text/html.
    The browser knows to render the response as an HTML document.
    If you visit http://localhost:3000/?json=true, the server will respond with a JSON object.
    The HTTP header will be set as Content-Type: application/json.
    The browser or client knows to treat the response as a JSON object and can handle it accordingly 
    (e.g., parsing it in JavaScript).Reading the Query String
*/