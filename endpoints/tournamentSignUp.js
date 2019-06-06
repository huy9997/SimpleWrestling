const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");
const search = require("../db/search");

router.post("/", (req, res) => {
  const { seeding_notes, tournament_id } = req.body;
  values = [seeding_notes, req.user[0].id, tournament_id];
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
