// Importing OS module
const os = require("os");

//Returns the CPU architecture of the operating system (e.g., ‘x64’, ‘arm’).
console.log("\nCPU architecture "+os.arch()); 

//Returns the name of the operating system (e.g., ‘Windows_NT’, ‘Linux’).
console.log("\nOS Type "+os.type()); 

//Provides an array of objects describing each CPU/core installed.
console.log("\nCPU core: ",os.cpus()) 

// Returns the amount of free system memory in bytes.
const freeRam = os.freemem();
console.log("\nFree RAM ",freeRam/1024/1024/1024,"GB") 

// Returns the total amount of system memory in bytes.
console.log("\nTotal RAM ",os.totalmem()/1024/1024/1024,"GB")

// Returns the path to the current user’s home directory.
console.log("\nhome directory "+os.homedir()) 

//Returns the hostname of the operating system.
console.log("\nHostname: "+ os.hostname()) 

// Returns a list of network interfaces and their details.
console.log("\nNetwork interfaces: ",os.networkInterfaces()) 

// Returns the operating system platform (e.g., ‘linux’, ‘darwin’)).
console.log("\nOperating system: "+os.platform()) 

// Returns the operating system release.
console.log("\nOS release "+os.release()) 

//Returns the system uptime in seconds.
console.log("\nSystem uptime: ", os.uptime()/3600, "hours") 

// Temp directory
console.log("\nTemp directory: ",os.tmpdir());

// get the information of the currently effective user.
console.log(os.userInfo());