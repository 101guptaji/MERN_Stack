// Importing FS module
const fs = require("fs");

// // Creating and writing data to a file, if file exists it will replace
// fs.writeFileSync("./Files/sample.txt", "Hello Buddy!");

// // Appeding data to file
// fs.appendFileSync("./Files/sample.txt", "\nHow are you?");

// // Reading data from the file
// const buffered_data = fs.readFileSync("./Files/sample.txt"); // return data in buffer 
// console.log(buffered_data.toString());

// const data = fs.readFileSync("./Files/sample.txt", "utf-8"); // return data in string 
// console.log(data);

// // Renaming the file
// fs.renameSync("./Files/sample.txt", "./Files/sample2.txt");

// // Deleting a file
// fs.unlinkSync("./Files/sample2.txt");