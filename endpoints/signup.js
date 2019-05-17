const express = require("express");
const router = express.Router();
const signup = require("../db/signUp/");

router.post("/", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightclass,
    typeOfAccount
  } = req.body;

  values = [
    first_name,
    last_name,
    email,
    password,
    dob,
    team,
    hometown,
    weightclass,
    typeOfAccount
  ];

  console.log(values);
  signup
    .User(values)
    .then(query => {
      console.log(query);
      res.json(query);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
