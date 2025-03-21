require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connection Sucess"))
    .catch((error) => {
      console.log("Connection failed");
      console.log(`${error}`);
      process.exit(1);
    });
};
