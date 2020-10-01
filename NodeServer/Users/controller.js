const mongoose = require("../mongoose.config");
const UserSchema = mongoose.model("User");
const bcrypt = require("bcrypt");

var UserController = function () {
  //add new member
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

  //get all members
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

  //get member according to id
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

  //get members according to first name
  this.getFilteredName = function (name) {
    return new Promise((resolve, reject) => {
      var query = { firstname: new RegExp("^" + name, "i") };
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

  //get members according to member id
  this.getFilteredId = function (id) {
    return new Promise((resolve, reject) => {
      var query = { userid: new RegExp("^" + id, "i") };
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

  //update member
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

  //delete member
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
