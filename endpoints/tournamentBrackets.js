const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");

router.get("/", (req, res) => {
  const { weight_class_id, tournament_id } = req.query;
  values = [tournament_id, weight_class_id];
  //get weight class brackets
  tournaments
    .getWeightClassBouts(values)
    .then(boutsResults => {
      res.json(boutsResults);
    })
    .catch(err => {
      console.log(err);
      res.json("their has been a error please try again");
    });
});

module.exports = router;
