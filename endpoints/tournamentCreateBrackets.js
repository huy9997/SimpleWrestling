const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.post("/", (req, res) => {
  const { wrestlerMatchesArray } = req.body;
  wrestlerMatchesArray.forEach(boutData => {
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
        res.json(
          "their was an error in creating a this bracket please try again"
        );
      });
  });
});
router.get("/", (req, res) => {
  const { tournament_id, weight_class_id } = req.query;
  values = [tournament_id, weight_class_id];
  tournaments
    .GetTournamentBrackets(values)
    .then(tournamentBracketResults => {
      res.json(tournamentBracketResults);
    })
    .catch(err => {
      res.json("error in getting  bracket data :(");
    });
});

module.exports = router;
