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
  search.SearchEmail([values[2]]).then(searchResult => {
    console.log(searchResult);
  });
  // signup
  //   .User(values)
  //   .then(query => {
  //     console.log(query);
  //     res.json("sucess");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.json(err);
  //   });
});

module.exports = router;
