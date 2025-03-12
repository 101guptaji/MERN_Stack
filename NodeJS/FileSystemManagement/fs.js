// Importing FS module
const fileSystem = require("fs");

// Create a new file and write data to the file, 
const data =  "Hello Buddy!\n How are you";
fileSystem.writeFile("input.txt", data, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("\nReading newly written data");

    // Read and display the contents of the file.
    fileSystem.readFile("input.txt", function (err, data) {
        try {
            if (err) {
                throw err;
            }
            console.log(data.toString());

            // Renaming the file
            fileSystem.rename("input.txt", "input2.txt", (err) => {
                try {
                    if (err) throw err.stack
                    console.log("\nRename done");

                    // Deleting a file
                    fileSystem.unlink("input2.txt", (err) => {
                        try {
                            if (err) throw err.stack
                            console.log("\nFile deleted succeessfully");
                        }
                        catch (err) {
                            console.log("\nCan not delete the file.\n" + err.toString());
                        }
                    });
                }
                catch (err) {
                    console.log("\nError in renaming.\n" + err.toString());
                }
            });
        }
        catch (err) {
            console.log("\nUnable to read data.\n" + err.toString());
        }
    });

});
