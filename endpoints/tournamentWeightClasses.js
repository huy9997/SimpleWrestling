const express = require("express");
const router = express.Router();
const tournament = require("../db/tournament");

router.post("/", (req, res) => {
  const { weightClasses } = req.body;
  for (let i = 0; i < weight_classes.length; i++) {
    const values = [weightClasses[i]];
    tournament.InsertWeightClass(values).catch(err => {
      res.json("their was an error in inserting this weight classes try again");
    });
  }
});

module.exports = router;
