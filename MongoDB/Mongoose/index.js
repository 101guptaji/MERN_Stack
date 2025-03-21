const express = require("express");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/collageDB")
    .then((res) => {
        console.log("Connection established successfully.")
    })
    .catch((err) => {
        console.log(err);
    })

const staffSchema = mongoose.Schema({
    'name': String,
    'email': String,
    role: String,
    experience: {
        type: Number,
        default: 0
    }
})

const staffModel = new mongoose.model("staff", staffSchema); // creates a collection named: "staffs" in MongoDB

// Add Data to the Database Using Mongoose
// const insertStaff = async ()=>{
//     try {
//         const staff1 = new staffModel({
//             name: "Shyam",
//             email: 'shyamu00@gmail.com',
//             role: 'Cleaner'
//         })

//         const data = await staff1.save();
//         if(data){
//             console.log("Data inserted successfully.")
//         }
//     } 
//     catch (error) {
//         console.log(err);
//     }
// };

// insertStaff();

// const insertStaffs = async () => {
//     try {
//         const staff1 = new staffModel({
//             name: "Staff4",
//             email: 'staff1@gmail.com',
//             role: 'Lab Assistant',
//             experience: 2
//         })

//         const staff2 = new staffModel({
//             name: "Staff5",
//             email: 'staff2@gmail.com',
//             role: 'Lab Assistant',
//             experience: 3
//         })

//         const staff3 = new staffModel({
//             name: "Staff6",
//             email: 'staff3@gmail.com',
//             role: 'Lab Assistant',
//             experience: 5
//         })

//         await staffModel.insertMany([staff1, staff2, staff3])
//             .then(() => {
//                 console.log('Data inserted successfully');
//                 mongoose.connection.close(); // Close the connection after insertion
//             })
//             .catch((err) => {
//                 console.error('Error inserting data:', err);
//                 mongoose.connection.close(); // Close the connection on error
//             });
//     }
//     catch (error) {
//         console.error(err);
//     }
// };

// insertStaffs();


// Reading or Querying Documents
// const getStaffs = async () => {
//     try {
//         // const data = await staffModel.find();

//         // const data = await staffModel.find({experience: {$gt: 2}}); // all staffs with experience greater than 2

//         const data = await staffModel.find().select({_id:0, email: 1}); // return only field "email" without id field
//         console.log(data);
//         mongoose.connection.close(); // Close the connection after insertion
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// getStaffs();


// Updating Documents
// const updateStaffById = async (id)=>{
//     try {
//         // Method 1
//         // const result = await staffModel.updateOne({_id: id}, {$set: {role: 'Networking'}}); // return status

//         // const result = await staffModel.findByIdAndUpdate({_id: id}, {$set: {role: 'Admin'}}); // return old document
        
//         const result = await staffModel.findByIdAndUpdate({_id: id}, {$set: {role: 'Professor'}}, {new: true}); // return updated document
//         console.log(result);    
//         mongoose.connection.close();
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }

// updateStaffById("67daaef9147f68976573c3d4");


// Deleting Documents:
const deleteStaffById = async (id)=>{
    try {
        const result = await staffModel.deleteOne({_id: id}); // return status
        if(result && result.deleteCount==1){
            console.log("Document deleted successfully.");
        }  
        else{
            console.log("Can not delete!")
        }
        mongoose.connection.close();
    } 
    catch (error) {
        console.log(error);
    }
}

deleteStaffById("67daaf8ef80e8ee2e2b5fed5");