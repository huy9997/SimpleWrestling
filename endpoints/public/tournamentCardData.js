let express = require("express");
let router = express.Router();
let tournament = require("../db/tournament");
let format = require("date-format");

router.get("/", (req, res) => {
  tournament
    .GetTournamentCardData([4])
    .then(cardData => {
      res.json(cardData);
    })
    .catch(err => {
      res.json("there was an error in ");
    });
});
router.get("/tournament", (req, res) => {
  tournament
    .GetTournamentCardData([12])
    .then(cardData => {
      res.json(cardData);
    })
    .catch(err => {
      res.json("there was an error in ");
    });
});

module.exports = router;
