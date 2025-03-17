/*
    Dynamic routing in ExpressJS include parameters, which allows you to create flexible and dynamic routes
    in your web application. 
    This parameters are used in your route handlers to customize the behaviour based on the data provided.

    In Express, dynamic routing is achieved by using route parameters, denoted by a colon (:) followed by 
    the parameter name.
*/

const express = require('express');
const app = express();

// Dynamic route with a parameter
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`); // http://localhost:3000/users/1
});
