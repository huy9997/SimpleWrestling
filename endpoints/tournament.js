let express = require("express");
let router = express.Router();
let tournament = require("../db/tournament");

router.get("/", (req, res) => {
  res.json("secure page");
});

router.post("/createTournament", (req, res) => {
  let active = true;
  let admin_account = req.user[0].id;
  const {
    name,
    location,
    description,
    tournament_start_date,
    tournament_end_date,
    wrestling_style,
    wrestling_level,
    tournament_flier,
    tournament_logo
  } = req.body;
  const values = [
    name,
    location,
    description,
    tournament_start_date,
    tournament_end_date,
    wrestling_style,
    wrestling_level,
    tournament_flier,
    tournament_logo,
    active,
    admin_account
  ];
  tournament
    .CreateTournament(values)
    .then(createTournamentResults => {
      res.json("you have created a tournament");
    })
    .catch(err => {
      res.json(
        "their was been an error in creating a tournament please try again"
      );
    });
});

module.exports = router;
