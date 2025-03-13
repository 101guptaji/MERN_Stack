const express = require("express");

const app = express();

// Routing
app.get("/", (req, res)=>{
    res.send("Home page");
});

app.get("/about", (req, res)=>{
    res.send("About  page");
});

// assign environment port if port 3000 is busy
const port = process.env.PORT || 3000;

// start the server
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
