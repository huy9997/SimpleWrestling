const express = require("express");
const router = express.Router();
const signup = require("../db/signUp/");
const search = require("../db/search");

const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
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

  values = [
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    team,
    address,
    weight_class,
    type_of_account
  ];
  console.log(values);
  search
    .SearchEmail([values[2]])
    .then(searchResult => {
      bcrypt.hash(values[3], 10, (err, hash) => {
        values[3] = hash;
        signup
          .User(values)
          .then(insertResult => {
            console.log(insertResult);
            res.json("sucess");
          })
          .catch(err => {
            console.log(err);
            res.json("Error has occured in signing up!");
          });
      });
    })
    .catch(err => {
      res.json("Email has already been used!");
    });
});

module.exports = router;
