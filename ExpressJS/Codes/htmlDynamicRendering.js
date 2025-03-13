const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index",{
        name: "Robert",
    });
})

app.get("/about", (req, res)=>{
    res.render("hero",{
        header: "About",
        content: "This org is established since 1998."
    });
})

app.get("/contact", (req, res)=>{
    res.render("hero",{
        header: "Contact",
        content: "You can contact me at abc@gmail.com"
    });
})

app.listen(PORT, (err) => {
    if (err) console.error("Server can not start.",err);

    console.log("Server is running at Port: " + PORT);
})