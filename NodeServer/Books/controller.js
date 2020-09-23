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
};

module.exports = new BookController();
