const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");
const search = require("../db/search");

router.post("/", (req, res) => {
  const { seeding_notes, tournament_id, tournament_weight_class } = req.body;
  const userId = req.user.id;
  values = [
    seeding_notes,
    tournament_weight_class,
    req.user[0].id,
    tournament_id
  ];
  tournament
    .SignUpForTournament(values)
    .then(signUpResults => {
      res.json("you have signed up for a tournament successfully");
    })
    .catch(err => {
      console.log(err);
      res.json(
        "there was a error in signing up for a tournament please try again"
      );
    });
});

module.exports = router;
