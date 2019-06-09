const express = require("express");
const router = express.Router();

const signup = require("./signup");
const auth = require("./auth");
const createTournament = require("./createTournament");
const tournamentSignUp = require("./tournamentSignUp");
const tournamentBrackets = require("./tournamentBrackets");
const tournamentWeightClasses = require("./tournamentWeightClasses");
const tournamentCreateBrackets = require("./tournamentCreateBrackets");

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
router.use("/createTournament", isAdmin, createTournament);
router.use("/tournamentWeightClasses", isAdmin, tournamentWeightClasses);
router.use("/tournamentCreateBrackets", isAdmin, tournamentCreateBrackets);
router.use("/tournamentSignUp", isWrestler, tournamentSignUp);
router.use("/tournamentBrackets", tournamentBrackets);

module.exports = router;
