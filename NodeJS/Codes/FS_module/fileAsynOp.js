// Importing FS module
const fs = require("fs");

// // Creating and writing data to a file, if file exists it will replace
// fs.writeFile("./Files/sample.txt", "Hello Buddy hell!", (err) => {
//     err ? console.log(err) : console.log("File created succeessfully");
// });

// // To open a file
// fs.open("./Files/sample.txt",(err, num)=>{
//     if(err) return console.error(err);
//     console.log(num);
// })

// // Appeding data to file
// fs.appendFile("./Files/sample.txt", "\nHow are you?", ()=>{
//     console.log("Data added succeessfully");
// });

// // Reading data from the file
// fs.readFile("./Files/sample.txt", (err, buff_data)=>{
//     console.log(buff_data.toString());
// });


// fs.readFile("./Files/sample.txt", "utf-8", (err, data) => {
//     err ? console.log(err.stack) : console.log(data);
// });


// // Renaming the file
// fs.rename("./Files/sample.txt", "./Files/sample2.txt", (err)=>{
//     if(err) throw err.stack
//     console.log("Rename done");
// });

// // Deleting a file
// fs.unlink("./Files/sample2.txt", (err)=>{
//     if(err) throw err.stack
//     console.log("File deleted succeessfully");
// });
