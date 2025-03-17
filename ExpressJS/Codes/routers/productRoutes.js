const express = require("express");

const router = express.Router();

router.get("/", (req, res)=>{ // http://localhost:3000/products
    res.send("<h1>Products Page</h1>");
})

router.get('/id=1', function (req, res) { // http://localhost:3000/products/id=1
    res.send("<h2>Product 1:</h2> <p>THis is a product </p>");
});

router.get('/page1', function (req, res) {  // http://localhost:3000/products/page1
    res.send("Products Page One");
});

module.exports = router;