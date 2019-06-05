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
    type_of_account,
    weight_class,
    wins,
    losses,
    user_account
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
    type_of_account,
    active
  ];
  valuesWrestler = [weight_class, wins, losses, user_account];
  search
    .SearchEmail([values[2]])
    .then(searchResult => {
      bcrypt.hash(values[3], 10, (err, hash) => {
        values[3] = hash;
        signup
          .CreateUser(values)
          .then(createUserResult => {
            if (values[7] == "wrestler") {
              valuesWrestler[3] = createUserResult[0].id;
              signup
                .CreateWrestler(valuesWrestler)
                .then(createWrestlerUserResult => {
                  res.json("You have signed up as a wrestler");
                })
                .catch(err => {
                  res.json("error in creating a wrestler");
                });
            }
            if (values[7] == "admin") {
              res.json("You have signed up as a admin");
            }
          })
          .catch(err => {
            res.status(status).json("error in creating a user");
          });
      });
    })
    .catch(err => {
      res.json("Email has already been used!");
    });
});

module.exports = router;
