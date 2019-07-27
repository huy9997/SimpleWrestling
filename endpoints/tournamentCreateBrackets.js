const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.post("/", (req, res) => {
  const { wrestlerMatchesArray } = req.body;

  wrestlerMatchesArray.forEach(boutData => {
    const values = [
      boutData.weight_class,
      boutData.tournament_wrestler_rank,
      boutData.wrestler_bracket_position,
      boutData.wrestler_name,
      boutData.wrestler_high_school,
      boutData.wrestler_record,
      boutData.wrestler_grade,
      boutData.tournament_id
    ];
    tournaments
      .InsertBracketMatches(values)
      .then(insertBracketsResults => {
        res.json("you have looped through the entire array");
      })
      .catch(err => {
        console.log(err);
        res.json(
          "their was an error in creating a this bracket please try again"
        );
      });
  });
});

module.exports = router;
