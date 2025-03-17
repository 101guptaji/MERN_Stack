const express = require("express");
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

// using express.static() middleware for rendering static pages
app.use(express.static("public")); // it will render index.html in public folder

// for a specifi file
app.use('/about', express.static(path.join(__dirname, 'public/about.html')))

app.listen(PORT, (err) => {
    if (err) console.error("Server can not start.",err);

    console.log("Server is running at Port: " + PORT);
})