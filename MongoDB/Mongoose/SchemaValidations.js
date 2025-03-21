const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/collageDB")
    .then(() => {
        console.log("Connection established successfully.")
    })
    .catch((err) => {
        console.log(err);
    })

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 10,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        min: 6666666666,
        max: 9999999999,
        // enum: [6789012345, 6789012346, 6789012347]
    },
    email: String,
    age: {
        type: Number,
        required: true,
        min: 18,
    }
})

const usersModel = new mongoose.model("users", userSchema); // creates a collection named: "users" in MongoDB

// Add Data to the Database Using Mongoose
const addUser = async ()=>{
    try {
        const user1 = new usersModel({
            name: "SONU123456",
            email: 'shyamu00@gmail.com',
            phone: 7890123456,
            age: 18
        })

        const data = await user1.save();
        if(data){
            console.log("Data inserted successfully.")
        }
        else{
            console.log("Error in creating document.")
        }
    } 
    catch (error) {
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
};

addUser();