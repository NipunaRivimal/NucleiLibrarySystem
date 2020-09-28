const mongoose = require("../mongoose.config");
const UserSchema = mongoose.model("User");
const bcrypt = require("bcrypt");

var UserController = function () {
  this.add = async function (userInstance) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userInstance.password, salt);
    return new Promise((resolve, reject) => {
      var User = new UserSchema({
        userid: userInstance.userid,
        firstname: userInstance.firstname,
        lastname: userInstance.lastname,
        mobilenumber: userInstance.mobilenumber,
        homeaddress: userInstance.homeaddress,
        email: userInstance.email,
        password: hashedPassword,
        usertype: userInstance.usertype,
        joindate: userInstance.joindate,
      });
      User.save()
        .then(() => {
          resolve({ status: 201, message: "User Added" });
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

  this.getFilteredName = function (name) {
    return new Promise((resolve, reject) => {
      // var regex = RegExp("/.*" + name + ".*/");
      var query = { firstname: new RegExp("^" + name) };
      // UserSchema.find({ firstname: { $search: name } })
      UserSchema.find(query)
        .exec()
        .then((data) => {
          resolve({ status: 200, message: "get selected member", data: data });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.getFilteredId = function (id) {
    return new Promise((resolve, reject) => {
      // var regex = RegExp("/.*" + name + ".*/");
      var query = { userid: new RegExp("^" + id) };
      // UserSchema.find({ firstname: { $search: name } })
      UserSchema.find(query)
        .exec()
        .then((data) => {
          resolve({ status: 200, message: "get selected member", data: data });
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
