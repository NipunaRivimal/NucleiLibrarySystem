const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for book details
const BookSchema = new Schema({
  bookcode: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  addeddate: {
    type: String,
    require: true,
  },

  issuestatus: {
    type: Boolean,
    require: true,
  },

  borrower: {
    type: String,
    require: false,
  },

  issueddate: {
    type: String,
    require: false,
  },

  returndate: {
    type: String,
    require: false,
  },
});

//schema for member details
const UserSchema = new Schema({
  userid: {
    type: String,
    require: true,
  },

  firstname: {
    type: String,
    require: true,
  },

  lastname: {
    type: String,
    require: true,
  },

  mobilenumber: {
    type: String,
    require: true,
  },

  homeaddress: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  usertype: {
    type: String,
    require: true,
  },

  joindate: {
    type: String,
    require: true,
  },
});

mongoose.model("Book", BookSchema);
mongoose.model("User", UserSchema);

mongoose.connect("mongodb://127.0.0.1:27017/LibrarySystem", (err) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Connected to the DB");
});

module.exports = mongoose;
