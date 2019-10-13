const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");

router.post("/", (req, res) => {
  const { wrestler_1score, wrestler_2score, bracket_match_id } = req.body;
  let values = [wrestler_1score, wrestler_2score, bracket_match_id];
  tournament
    .InsertMatchResults(values)
    .then(insertMatchresults => {
      res.json("You have successfully added a bracketmatch result");
    })
    .catch(err => {
      res.json("their has been an error in storing bout results try again");
    });
});

module.exports = router;
