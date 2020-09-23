var express = require("express");
var router = express.Router();
var controller = require("./controller");

router.post("/addbook", (req, res) => {
  controller
    .add(req.body)
    .then((response) => {
      res.status(response.status).send(response);
    })
    .catch((err) => {
      res.status(err.status).send(err.message);
    });
});

module.exports = router;
