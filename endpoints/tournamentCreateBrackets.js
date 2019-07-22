const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.post("/", (req, res) => {
  const { wrestlerMatchesArray } = req.body;
  console.log("wrestler arrya", wrestlerMatchesArray);
  wrestlerMatchesArray.forEach(boutData => {
    console.log("bout data", boutData);
    const values = [
      boutData.wrestler1_id,
      boutData.wrestler2_id,
      boutData.wrestler1_bracket_position,
      boutData.wrestler2_bracket_position,
      boutData.bout_number,
      boutData.weight_class_id,
      boutData.tournament_id
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
});

module.exports = router;
