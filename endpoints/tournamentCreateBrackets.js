const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.post("/", (req, res) => {
  const {
    wrestler1_id,
    wrestler2_id,
    bracket_position,
    bout_number,
    weight_class_id,
    tournament_id
  } = req.body;
  const values = [
    wrestler1_id,
    wrestler2_id,
    bracket_position,
    bout_number,
    weight_class_id,
    tournament_id
  ];
  tournaments
    .InsertBracketMatches(values)
    .then(insertBracketsResults => {
      res.json("you have successfully added the bracket");
    })
    .catch(err => {
      console.log(err);
      res.json(
        "their was an error in creating a this bracket please try again"
      );
    });
});

module.exports = router;
