const express = require("express");
const router = express.Router();

const cors = require("cors");

const auth = require("./auth");
const admin = require("./admin");
const public = require("./public");
const wrestler = require("./wrestler");

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
router.use("/tournamentSignUp", isWrestler, wrestler.tournamentSignUp);
router.use("/tournamentBrackets", public.tournamentBrackets);
router.use("/tournamentMatchResults", public.tournamentMatchResults);
router.use("/getTournamentCardData", public.tournamentCardData);
router.use("/searchTournament", public.searchTournament);
router.use("/getTournamentSignUps", public.getTournamentSignUps);
router.use("/tournamentBracketData", public.tournamentBracketData);

module.exports = router;
