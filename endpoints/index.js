const express = require("express");
const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const auth = require("./auth");
const tournaments = require("./tournaments");

let loggedin = function(req, res, next) {
  if (req.isAuthenticated()) {
    //db call here
    console.log("you are logging in");
    next();
  } else {
    console.log("redirecting to the page");
    res.redirect("/login");
  }
};

router.use("/login", login);
router.use("/signup", signup);
router.use("/auth", auth);
router.use("/tournaments", loggedin, tournaments);

module.exports = router;
