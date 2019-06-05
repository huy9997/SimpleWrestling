const express = require("express");
const router = express.Router();

const signup = require("./signup");
const auth = require("./auth");
const createTournaments = require("./createTournaments");

let isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user[0].type_of_account == "admin") {
    next();
  } else {
    res.redirect("/login");
  }
};
let isWrestler = (req, res, next) => {
  if (req.isAuthenticated() && req.user[0].type_of_account == "wrestler") {
    next();
  } else {
    res.redirect("/login");
  }
};

router.use("/signup", signup);
router.use("/auth", auth);
router.use("/createTournaments", isAdmin, createTournaments);

module.exports = router;
