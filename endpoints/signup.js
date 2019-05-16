const express = require("express");
const router = express.Router();
const db = require("../db/login-signup");
router.get("/", (req, res) => res.send("Hello World!"));

router.post("/signup", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown
  } = req.body;
  values = [first_name, last_name, email, password, dob, team, hometown];
});
module.exports = router;
