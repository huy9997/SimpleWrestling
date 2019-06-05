const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");
const search = require("../db/search");

router.post("/", (req, res) => {
  const userWrestler_id = 0;
  const { seeding_notes, tournament_id } = req.body;
  values = [seeding_notes, userWrestler_id, tournament_id];
  search
    .SearchUserWrestler([req.user[0].id])
    .then(searchUserWrestlerResult => {
      values[1] = searchUserWrestlerResult[0].id;
    })
    .catch(err => {
      res.json("there was a error searching for your wrestler account");
    });
  tournament
    .SignUpForTournament(values)
    .then(signUpResults => {
      res.json("you have signed up for a tournament successfully");
    })
    .catch(err => {
      res.json(
        "there was a error in signing up for a tournament please try again"
      );
    });
});

module.exports = router;
