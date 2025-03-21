/*
    Objective: Perform CRUD operations using Mongoose with MongoDB Compass.

    Requirements:
        Create a document using the "Product" model.
        Retrieve all documents from the "Product" collection.
        Update a document in the "Product" collection.
        Delete a document from the "Product" collection.

*/
const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/eCommerce")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: {
        type: String,
        default: ""
    }
})

const Product = new mongoose.model("Product", productSchema); // creates a collection named: "products" in MongoDB


// Creating a document using the "Product" model.
app.post("/products", async (req, res) => {
    try {
        const product1 = new Product(req.body);
        console.log(product1);

        const data = await product1.save();
        if(data){
            res.send("Product added successfully.");
        }
        else{
            res.status(500).send(data);
        }
    }
    catch (error) {
        console.log(err);
    }
})


//  Retrieve all documents from the "Product" collection.
app.get("/products", async (req, res)=>{
    try {
        const data = await Product.find();
        if(data){
            res.send(data);
        }
        else{
            res.status(500).send("Can not get data.");
        }
    } 
    catch (error) {
        console.log(error);    
    }
})


// Update a document in the "Product" collection.
app.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.updateOne({_id: id}, {$set: req.body});
        console.log(result);
        if(result && result.modifiedCount===1){
            res.send("Data Updated successfully.");
        }
        else{
            res.status(500).send("Can not Update Data.");
        }
    } 
    catch (error) {
        console.log(error);    
    }
})


// Delete a document from the "Product" collection.
app.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.deleteOne({_id: id});
        console.log(result);
        if(result && result.deletedCount===1){
            res.send("Data Deleted successfully.");
        }
        else{
            res.status(500).send("Can not Update Data.");
        }
    } 
    catch (error) {
        console.log(error);    
    }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});