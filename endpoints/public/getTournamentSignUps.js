let express = require("express");
let router = express.Router();
let tournament = require("../../db/tournament");
let search = require("../../db/search");

router.get("/", (req, res) => {
  const { tournament_id, tournament_weight_class } = req.query;
  let wrestlerData = [];
  tournament
    .GetTournamentSignUps([tournament_id, tournament_weight_class])
    .then(tournamentSignupResults => {
      for (let i = 0; i < tournamentSignupResults.length; i++) {
        search
          .SearchWrestlerTournamentData([
            tournamentSignupResults[i].user_wrestler_id
          ])
          .then(wrestlerResults => {
            wrestlerData.push(wrestlerResults);

            //figure out a way to get the tournament data to come back and return
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
