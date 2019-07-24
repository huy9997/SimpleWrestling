let express = require("express");
let router = express.Router();
let tournaments = require("../db/tournament");
let search = require("../db/search");

router.get("/", (req, res) => {
  const { tournament_id, weight_class_id } = req.query;
  values = [tournament_id, weight_class_id];
  let wrestlerBracketInfo = [];
  tournaments
    .GetTournamentBrackets(values)
    .then(tournamentBracketResults => {
      tournamentBracketResults.forEach(element => {
        wrestlerBracketInfo.push(element.bout_number);
      });
    })
    .catch(err => {
      res.json("error in getting  bracket data :(");
    })
    .then(results => {
      console.log(wrestlerBracketInfo);
      res.json(wrestlerBracketInfo);
    });
});
module.exports = router;
