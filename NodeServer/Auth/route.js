const express = require("express");
const router = express.Router();

const AuthController = require("./controller");

//login route
router.post("/login", AuthController.login);

module.exports = router;
