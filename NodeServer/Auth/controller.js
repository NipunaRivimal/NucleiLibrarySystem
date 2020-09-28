const mongoose = require("../mongoose.config");
const UserSchema = mongoose.model("User");
const bcrypt = require("bcrypt");

const login = (req, res, next) => {
  var password = req.body.password;

  UserSchema.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({ error: err });
        }
        if (result) {
          res.json({ status: 200, message: "login success", data: user });
        } else {
          res.json({
            status: 600,
            message: "Password does not match!",
          });
        }
      });
    } else {
      res.json({ status: 601, message: "No user found!" });
    }
  });
};

module.exports = { login };
