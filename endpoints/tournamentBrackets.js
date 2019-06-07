const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");
const search = require("../db/search");
//get data from userSignUpTournament

router.post("/", (req, res) => {
  const { tournament_id } = req.body;
  tournaments
    .GetAllWrestlersSignedUp([tournament_id])
    .then(wrestlerSignedUpResults => {
      console.log(wrestlerSignedUpResults);

      res.json("sucess");
    })
    .catch(err => {
      res.json("their was an error in ");
    });
});

module.exports = router;
