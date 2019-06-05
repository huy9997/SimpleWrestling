const express = require("express");
const router = express.Router();

const signup = require("./signup");
const auth = require("./auth");
const createTournaments = require("./createTournaments");

let loggedin = function(req, res, next) {
  if (req.isAuthenticated()) {
    //db call here
    next();
  } else {
    console.log("redirecting to the page");
    res.redirect("/login");
  }
};

router.use("/signup", signup);
router.use("/auth", auth);
router.use("/createTournaments", loggedin, createTournaments);

module.exports = router;
