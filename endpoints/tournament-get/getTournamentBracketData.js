let express = require("express");
let router = express.Router();
let tournaments = require("../../db/tournament");

router.get("/", (req, res) => {
  const { weight_class, tournament_id } = req.query;

  values = [tournament_id, weight_class];
  //get weight class brackets
  console.log(values);
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
