const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookcode: {
    type: String,
    require: true,
  },

  name: {
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
});

mongoose.model("Book", BookSchema);

mongoose.connect("mongodb://127.0.0.1:27017/LibrarySystem", (err) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Connected to the DB");
});

module.exports = mongoose;
