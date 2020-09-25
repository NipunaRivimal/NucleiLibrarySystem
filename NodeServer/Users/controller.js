const mongoose = require("../mongoose.config");
const UserSchema = mongoose.model("User");

var UserController = function () {
  this.add = function (userInstance) {
    return new Promise((resolve, reject) => {
      var User = new UserSchema({
        userid: userInstance.userid,
        firstname: userInstance.firstname,
        lastname: userInstance.lastname,
        mobilenumber: userInstance.mobilenumber,
        homeaddress: userInstance.homeaddress,
        username: userInstance.username,
        password: userInstance.password,
        joindate: userInstance.joindate,
      });
      User.save()
        .then(() => {
          resolve({ status: 200, message: "User Added" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.getAll = function () {
    return new Promise((resolve, reject) => {
      UserSchema.find()
        .exec()
        .then((data) => {
          resolve({ status: 200, message: "Gell All Users", data: data });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.getSingle = function (id) {
    return new Promise((resolve, reject) => {
      UserSchema.find({ _id: id })
        .exec()
        .then((data) => {
          resolve({ status: 200, message: "get selected user", data: data });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.update = function (id, updateData) {
    return new Promise((resolve, reject) => {
      UserSchema.updateOne({ _id: id }, updateData)
        .then(() => {
          resolve({ status: 200, message: "update user success" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.delete = function (id) {
    return new Promise((resolve, reject) => {
      UserSchema.deleteOne({ _id: id })
        .then(() => {
          resolve({ status: 200, message: "delete user success" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };
};

module.exports = new UserController();
