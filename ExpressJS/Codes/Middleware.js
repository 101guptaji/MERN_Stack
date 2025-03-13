const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
const auth = function(req, res, next){
    let logIn = false;
    if(!logIn){
        res.send("Please Login First.");
    }
    else{
        next();
    }
}

const human = function(req, res, next){
    let isHuman = false;
    if(!isHuman){
        res.send("You are not human.");
    }
    else{
        next();
    }
}

app.get("/", (req, res)=>{
    res.send("Home Page");
})

// Router level Middleware
app.get('/about', human, function (req, res) {
    res.send("About Page");
});

// Application level Middleware
app.use(auth);

app.get('/user', function (req, res) {
    res.send("User Page");
});

app.get('/products', function (req, res) {
    res.send("Products Page");
});


app.listen(PORT, (err)=>{
    if(err){
        console.error(err);
    }
    console.log("Server is running at port: "+PORT)
});