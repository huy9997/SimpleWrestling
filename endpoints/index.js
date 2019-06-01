const express = require("express");
const router = express.Router();

const signup = require("./signup");
const login = require("./login");

router.use("/login", login);
router.use("/signup", signup);

module.exports = router;
