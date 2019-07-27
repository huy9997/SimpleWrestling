const express = require("express");
const router = express.Router();
const tournament = require("../../db/tournament");

router.post("/", (req, res) => {
  const { weightClasses, tournament_id } = req.body;
  for (let i = 0; i < weightClasses.length; i++) {
    const values = [weightClasses[i], tournament_id];
    tournament.InsertWeightClass(values).catch(err => {
      console.log(err);
      res.json("their was an error in inserting this weight classes try again");
    });
  }
  res.json("you have successfully added weight calsses");
});

module.exports = router;
