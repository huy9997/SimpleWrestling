const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.post("/", (req, res) => {
  const { wrestlerMatchesArray } = req.body;

  wrestlerMatchesArray.forEach(boutData => {
    const {
      weight_class,
      tournament_wrestler_rank,
      wrestler_bracket_position,
      wrestler_name,
      wrestler_high_school,
      wrestler_record,
      wrestler_grade,
      tournament_ids
    } = boutData;

    const values = [
      weight_class,
      tournament_wrestler_rank,
      wrestler_bracket_position,
      wrestler_name,
      wrestler_high_school,
      wrestler_record,
      wrestler_grade,
      tournament_ids
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
