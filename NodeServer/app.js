const Express = require("express");
const bodyParser = require("body-parser");
const Cors = require("cors");
const BookRoute = require("./Books/route");

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());
app.use("/books", BookRoute);

app.listen("8081", "127.0.0.1", function (err) {
  if (err) {
    console.log(err);
    process.exit(-1);
  }

  console.log("Server listen on port 8081");
});
