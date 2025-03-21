require("dotenv").config();

// Importing the connection function from connections.js
require("./db/connections").connect();

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

//  Import the model -User
const User = require("./Model/User");
const auth = require("./middleware/auth");

const { SECRET } = process.env;

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Creating a sample  route
app.get("/", (req, res) => {
  res.status(200).send("Hello everyone");
});

/*
  /register -> POST Route for registering new user
  Data required -> firstName , lastName , email , password 
*/
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // validate if data exists
    if (!(email && password && lastName && firstName)) {
      return res.status(400).send("All fields are required");
    }

    // check if user exists
    if (await User.findOne({ email })) {
      return res.status(401).send("User exists, Please login");
    }

    // encrypt the password
    const encryptedPass = await bcrypt.hash(password, 10);

    // ! Save to Database
    const user = await User.create({
      firstName,
      lastName,
      password: encryptedPass,
      email,
    });

    // create a token and send it to user
    const token = jwt.sign(
      {
        id: user._id,
      },
      SECRET,
      { expiresIn: "2h" }
    );
    user.token = token;

    // dont want to send password
    user.password = undefined;
    res.status(201).json(user);

  } 
  catch (error) {
    console.error("Error while register", error);
    res.status(500).send("Internal Server Error");
  }
});

/*
  /login -> POST Route for login  user
  Data required -> email , password 
*/

app.get("/login", async (req, res) => {
  try {
    // Collecting info from frontend
    const { email, password } = req.body;
    // Validate
    if (!(email && password)) {
      return res.status(400).json({ msg: "Credentials Required" });
    }
    // check if user already exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    // match the password
    if (user && (await bcrypt.compare(password, user.password))) {
      // create a token
      const token = jwt.sign({ id: user._id, email }, SECRET, {
        expiresIn: "2h",
      });

      // ?At line : 99 user is send as a response so we need to hide our password
      user.password = undefined;
      user.token = token;
      const options = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res
        .status(200)
        .cookie("token", token, options)
        .json({ success: true, token, user });
    } else {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error while login", error);
    res.status(500).send("Internal Server Error");
  }
});

/*
  /dashboard -> GET Route for dashboard access
*/

app.get("/dashboard", auth, (req, res) => {
  res.status(200).send("Dashboard");
});

module.exports = app;
