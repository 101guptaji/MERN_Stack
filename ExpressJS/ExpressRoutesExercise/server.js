/*
    Objective: Create an Express.js application that sends responses.

    Requirements:
        Install Express.js using npm.
        Create a new Express.js project.
        Define routes for GET, POST, PUT, and DELETE requests.
        Send responses.
*/

const express = require("express");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    // reading data from file
    let data = fs.readFileSync("users.json", "utf-8");

    res.send(data);
});

app.post("/", (req, res) => {
    let user = req.body;

    // console.log(user)

    // reading data from file
    let data = fs.readFileSync("users.json", "utf-8");
    let users = JSON.parse(data);

    users.push(user);

    fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err)
            console.error(err);
        else
            res.end(`Received: ${JSON.stringify(user)}`);
    })
})

app.put("/", (req, res)=>{
    let user = req.body;

    // reading data from file
    let data = fs.readFileSync("users.json", "utf-8");
    let users = JSON.parse(data);

    users = users.map((item)=>{
        if(item.id == user.id){
            item = {...item, ...user};
        }
        return item;
    })

    fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err)
            console.error(err);
        else
            res.end(`Updated: ${JSON.stringify(user)}`);
    })
});

app.delete("/", (req, res)=>{
    let user = req.body;

    // reading data from file
    let data = fs.readFileSync("users.json", "utf-8");
    let users = JSON.parse(data);

    users = users.filter((item)=>item.id !== user.id)

    fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err)
            console.error(err);
        else
            res.end(`Deleted: ${JSON.stringify(user)}`);
    })
})


app.listen(PORT, (err) => {
    if (err) console.error(err);

    console.log("Server is running at Port: " + PORT);
})