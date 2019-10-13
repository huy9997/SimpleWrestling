const express = require("express");
const router = express.Router();

const cors = require("cors");

const auth = require("./auth");
const createTournament = require("./admin/createTournament");
const tournamentCreateBrackets = require("./admin/tournamentCreateBrackets");
const tournamentWeightClasses = require("./admin/tournamentWeightClasses");
const admin = require("./admin");

const tournamentSignUp = require("./tournamentSignUp");
const tournamentBrackets = require("./tournamentBrackets");
const tournamentMatchResults = require("./tournamentMatchResults");
const getTournamentCardData = require("./getTournamentCardData");
const searchTournament = require("./searchTournament");
const getTournamentSignUps = require("./getTournamentSignUps");
const getTournamentBracketData = require("./getTournamentBracketData");

router.use(cors());

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

router.use("/signup", auth.signup);
router.use("/auth", auth.auth);
router.use("/createTournament", isAdmin, admin.createTournament);
router.use("/tournamentWeightClasses", isAdmin, admin.tournamentWeightClasses);
router.use(
  "/tournamentCreateBrackets",
  isAdmin,
  admin.tournamentCreateBrackets
);
router.use("/tournamentSignUp", isWrestler, tournamentSignUp);
router.use("/tournamentBrackets", tournamentBrackets);
router.use("/tournamentMatchResults", tournamentMatchResults);
router.use("/getTournamentCardData", getTournamentCardData);
router.use("/searchTournament", searchTournament);
router.use("/getTournamentSignUps", getTournamentSignUps);
router.use("/getTournamentBracketData", getTournamentBracketData);

module.exports = router;
