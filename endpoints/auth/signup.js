const express = require("express");
const router = express.Router();
const signup = require("../../db/signUp");
const search = require("../../db/search");

const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  let active = true;
  const {
    type_of_account,
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    address,
    grade
  } = req.body;

  if (type_of_account == "admin") {
    const values = [
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      address,
      type_of_account,
      active
    ];
    search
      .SearchAdminEmail([values[2]])
      .then(searchResult => {
        bcrypt.hash(values[3], 10, (err, hash) => {
          values[3] = hash;
          signup
            .CreateAdmin(values)
            .then(createAdminResult => {
              res.json("You have successfully make a Admin Account");
            })
            .catch(err => {
              res.json("Error in creating admin account please try agains");
            });
        });
      })
      .catch(err => {
        res.json("Email has already been used!");
      });
  }
  if (type_of_account == "wrestler") {
    const { team, weight_class, wins, losses } = req.body;
    const values = [
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      address,
      team,
      weight_class,
      wins,
      losses,
      grade,
      type_of_account,
      active
    ];
    search
      .SearchWrestlerEmail([values[2]])
      .then(searchResult => {
        bcrypt.hash(values[3], 10, (err, hash) => {
          values[3] = hash;
          signup
            .CreateWrestler(values)
            .then(createAdminResult => {
              res.json("You have successfully make a wrestler Account");
            })
            .catch(err => {
              res.json("Error in creating wrestler account please try again");
            });
        });
      })
      .catch(err => {
        res.json("Email has already been used!");
      });
  }
});

module.exports = router;
