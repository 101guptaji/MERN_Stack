const express = require("express");

const productRouter = require("./routers/productRoutes");

const app = express();

const PORT = 3000;

app.use("/products", productRouter);

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})

app.get('/about', function (req, res) {
    res.send("About Page");
});

app.listen(PORT, (err)=>{
    if(err){
        console.error(err);
    }
    console.log("Server is running at port: "+PORT) // http://localhost:3000
})