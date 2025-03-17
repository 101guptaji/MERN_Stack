/*
    Objective: Create an Express.js application that uses routing and middleware.

    Requirements:
        Install Express.js using npm.
        Create a new Express.js project.
        Define routes for the root URL (/) and /about.
        Use middleware to log requests.
*/
const express = require("express");

const rootRoute = require("./routes/homePage");
const aboutRoute = require("./routes/aboutPage");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/api", rootRoute);
app.use("/api", aboutRoute);


app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    console.log("Server is running at port: " + PORT) // http://localhost:3000
})