// Importing path module
const path = require("path");

const relativePath = "Codes/Path_Module/index.js"

console.log("Current directory:", __dirname); // D:\MERN_Stack\NodeJS\Codes\Path_Module
console.log("Current FileName:", __filename); // D:\MERN_Stack\NodeJS\Codes\Path_Module\index.js

// Returns the filename portion of a path to the file
console.log(path.basename(relativePath)); // index.js

// Using the extension parameter 
 console.log(path.basename(__filename,".js")); // index

// // directory name
console.log(path.dirname(relativePath)); // Codes/Path_Module

// extension name
console.log(path.extname(relativePath)); // .js

// check for absolute path
console.log(path.isAbsolute(relativePath)); // false
console.log(path.isAbsolute("/"+relativePath)); // true

//  joins all given path segments together using the appropriate platform-specific separator
const path1 = path.join("Codes", "index.html");
console.log(path1); // Codes\index.html

// Returns an object whose properties represent the given path. 
console.log(path.parse(__filename));

// resolve a sequence of path segments to an absolute path.
const path2 = path.resolve("readme.md");
console.log(path2) // D:\MERN_Stack\NodeJS\Codes\Path_Module\readme.md

