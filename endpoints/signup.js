const express = require("express");
const router = express.Router();
const signup = require("../db/signUp/");

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
    type_of_Account
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
    type_of_Account
  ];

  console.log(values);
  signup
    .User(values)
    .then(query => {
      console.log(query);
      res.json(query, "sucess");
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
