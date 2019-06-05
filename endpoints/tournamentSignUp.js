const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");

router.post("/", (req, res) => {
  const { seeding_notes } = req.body;
  values = [seeding_notes, user_id, tournament_id];
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
