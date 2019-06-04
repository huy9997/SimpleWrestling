const express = require("express");
const router = express.Router();
const signup = require("../db/signUp/");
const search = require("../db/search");

const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  let active;
  const {
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    team,
    address,
    weight_class,
    type_of_account
  } = req.body;
  if (email != "" && password != "") {
    active = true;
  }
  values = [
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    team,
    address,
    weight_class,
    type_of_account,
    active
  ];
  search
    .SearchEmail([values[2]])
    .then(searchResult => {
      bcrypt.hash(values[3], 10, (err, hash) => {
        values[3] = hash;
        signup
          .User(values)
          .then(insertResult => {
            res.json("You have signed in in");
          })
          .catch(err => {
            res.status(status).json("error in login");
          });
      });
    })
    .catch(err => {
      res.json("Email has already been used!");
    });
});

module.exports = router;
