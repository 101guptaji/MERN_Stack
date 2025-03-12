const fs = require("fs");

const readStream = fs.createReadStream("sample.txt", "utf-8");

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk)=>{
    writeStream.write(chunk);
    console.log("Data written successfully");
});

// readStream.pipe(process.stdout);