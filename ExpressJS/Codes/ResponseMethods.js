const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send([1,2,3,4,5]);

    // res.sendStatus(404); // Not Found

    // res.status(404).send("Server is Running."); // status is overwrite by send message

    // res.json({"product":"Smart Phones"}).setHeader('custom-header','value') // {"product":"Smart Phones"}

    // res.sendFile(path.join(__dirname,"Response.html"));

    // res.download(path.join(__dirname,"Response.html"));

    // res.append('Warning', '201 Warning');
    // console.log(res.get('Warning'));

    // res.redirect('https://www.google.com');

    res.end();
})

// Middleware
app.use('/verify', function (req, res, next) {
    console.log("Authenticate and Redirect")
    res.redirect('/user');
    next();
});

app.get('/user', function (req, res) {
    res.send("User Page");
});

app.listen(PORT, (err)=>{
    if(err){
        console.error(err);
    }
    console.log("Server is running at port: "+PORT)
});