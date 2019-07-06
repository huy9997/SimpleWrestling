let express = require("express");
let router = express.Router();
let tournament = require("../db/tournament");

router.get("/", (req, res) => {
  const { tournament_id, tournament_weight_class } = req.query;
  tournament
    .GetTournamentSignUps([tournament_id, tournament_weight_class])
    .then(tournamentSignupResults => {
      res.json(tournamentSignupResults);
    })
    .catch(err => {
      res.json("there was an error in ");
    });
});

module.exports = router;
