require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const auth = (req, res, next) => {
  const { token } = req.cookies;
  // || req.header("Auhtorization").replace("Bearer ", "");
  // Auhtorisation: "Bearer TokenValue";

  // check if token is there or not
  if (!token) {
    return res.status(403).send("token is missing");
  }
  // verify token
  try {
    const decode = jwt.verify(token, SECRET);
    console.log(decode);
    console.log(req.user);
    req.user = decode;
  } catch (error) {
    console.log("error");
    res.status(400).send({ msg: "Invalid Token", token: token });
  }
  return next();
};

module.exports = auth;
