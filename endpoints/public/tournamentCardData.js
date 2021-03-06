let express = require("express");
let router = express.Router();
let tournament = require("../../db/tournament");

router.get("/", (req, res) => {
  tournament
    .GetTournamentCardData([4])
    .then(cardData => {
      res.json(cardData);
    })
    .catch(err => {
      console.log("Error: ", err);
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
