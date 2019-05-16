const express = require("express");
const router = express.Router();
const db = require("../db/signUp");

router.post("/", (req, res) => {
  const { userType } = req.body;
  const {
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightclass
  } = req.body;
  values = [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightclass
  ];
});
switch (userType) {
  case "admin":
    db.AdminSignup(values);
    break;
  case "coach":
    db.CoachSignup(values);
    break;
  default:
    db.WrestlerSignup(values);
    break;
}

module.exports = router;
