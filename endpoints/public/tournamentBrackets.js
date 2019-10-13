const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.get("/", (req, res) => {
  const { weight_class_id, tournament_id } = req.query;
  values = [tournament_id, weight_class_id];
  //get weight class brackets
  tournaments
    .getWeightClassBouts(values)
    .then(boutsResults => {
      res.json(boutsResults);
    })
    .catch(err => {
      console.log(err);
      res.json("their has been a error please try again");
    });
});
router.get("/tournamentLevel", (req, res) => {
  const { tournament_id } = req.query;
  console.log(req.query, " querys");
  values = [tournament_id];
  tournaments
    .GetTournamentLevel(values)
    .then(tournamentLevelData => {
      res.json(tournamentLevelData);
    })
    .catch(err => {
      console.log(errs);
      res.json("their has been an error in getting the tournament");
    });
});

module.exports = router;
