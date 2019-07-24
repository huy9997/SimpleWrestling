let express = require("express");
let router = express.Router();
let tournaments = require("../db/tournament");

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
