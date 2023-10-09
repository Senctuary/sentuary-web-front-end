const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

exports.generateToken = (user) => {
  console.log(user.username);
  console.log(user.password);
  let payLoad = {
    username: user.username,
    password: bcrypt(user.password),
  };
  return jwt.sign({ payLoad }, SECRET_KEY, { expiresIn: "1d" });
};

