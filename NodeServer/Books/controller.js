var mongoose = require("../mongoose.config");
var BookSchema = mongoose.model("Book");

var BookController = function () {
  this.add = function (bookInstance) {
    return new Promise((resolve, reject) => {
      var Book = new BookSchema({
        bookcode: bookInstance.bookcode,
        name: bookInstance.name,
        description: bookInstance.description,
        addeddate: bookInstance.addeddate,
        issuestatus: bookInstance.issuestatus,
        borrower: bookInstance.borrower,
      });
      Book.save()
        .then(() => {
          resolve({ status: 200, message: "Book Added" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.getAll = function () {
    return new Promise((resolve, reject) => {
      BookSchema.find()
        .exec()
        .then((data) => {
          resolve({ status: 200, message: "Gell All Books", data: data });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.update = function (id, updateData) {
    return new Promise((resolve, reject) => {
      BookSchema.updateOne({ _id: id }, updateData)
        .then(() => {
          resolve({ status: 200, message: "update book success" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };

  this.delete = function (id) {
    return new Promise((resolve, reject) => {
      BookSchema.remove({ _id: id })
        .then(() => {
          resolve({ status: 200, message: "delete book success" });
        })
        .catch((err) => {
          reject({ status: 404, message: "err:-" + err });
        });
    });
  };
};

module.exports = new BookController();
