let express = require("express");
let router = express.Router();
let tournament = require("../db/tournament");
let search = require("../db/search");

router.get("/", (req, res) => {
  const { tournament_id, tournament_weight_class } = req.query;
  tournament
    .GetTournamentSignUps([tournament_id, tournament_weight_class])
    .then(tournamentSignupResults => {
      let wrestlerData = [];
      for (let i = 0; i < tournamentSignupResults.length; i++) {
        search
          .SearchWrestler([tournamentSignupResults[i].user_wrestler_id])
          .then(wrestlerResults => {
            wrestlerData.push(wrestlerResults);
          })
          .catch(err => {
            console.log(err);
            res.json(
              "error in getting the wrestler data to load into brackets"
            );
          });
      }
    })
    .catch(err => {
      res.json("there was an error in ");
    });
});

module.exports = router;
