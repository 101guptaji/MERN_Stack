/*
    Objective: Implement validations and error handling using Mongoose with MongoDB Compass.

    Requirements:
        Add validation to the "Product" schema.
        Test the validation by creating an invalid document.
        Handle validation errors.
    */

const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/eCommerce').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// ccreatingthe Product schema with validation
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        minlength: [3, 'Product name must be at least 3 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Product price must be a positive number']
    },
    category: {
        type: String,
        enum: ['electronics', 'books', 'clothing', 'food'],
        required: [true, 'Product category is required'],
        lowercase: true
    }
});

// Creating the Product model
const Product = mongoose.model('Product', productSchema);

// Testing the validation
// const invalidProduct = new Product({
//     name: 'hg',
//     price: -10,
//     category: 'test'
// });

// invalidProduct.save().then(() => {
//     console.log('Product saved successfully');
// }).catch(err => {
//     if (err.name === 'ValidationError') {
//         console.error('Validation Error:', err.message);
//     } else {
//         console.error('Error saving product:', err);
//     }
// });

// Creating a document using the "Product" model.
app.post("/products", async (req, res) => {
    const product1 = new Product(req.body);

    await product1.save().then(() => {
        console.log(product1);
        res.send('Product saved successfully');
    }).catch(err => {
        if (err.name === 'ValidationError') {
            res.status(400).send('Validation Error:' + err.message);
        } else {
            res.status(500).send('Error saving product:' + err);
        }
    });

})


//  Retrieve all documents from the "Product" collection.
app.get("/products", async (req, res) => {

    await Product.find().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send('Can not get data:' + err);
    });

})

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});