const mongoose = require("../mongoose.config");
const UserSchema = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  var password = req.body.password;

  UserSchema.findOne({ email: req.body.email }).then((user) => {
    //check availability of user
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        //if error in password compare send response with errors
        if (err) {
          res.json({ error: err });
        }
        if (result) {
          //if success send response with user data and token
          let token = jwt.sign({ name: user.email }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.json({
            status: 200,
            message: "login success",
            data: user,
            token,
          });
        } else {
          //if password doesnt match send response with status 600 and message
          res.json({
            status: 600,
            message: "Password does not match!",
          });
        }
      });
    } else {
      //if user not found send response with status 601 and message
      res.json({ status: 601, message: "No user found!" });
    }
  });
};

module.exports = { login };
