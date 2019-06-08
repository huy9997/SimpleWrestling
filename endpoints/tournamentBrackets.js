const express = require("express");
const router = express.Router();
const tournaments = require("../db/tournament");
const search = require("../db/search");
//get data from userSignUpTournament

router.post("/", (req, res) => {
  const {
    wrestler1_id,
    wrestler2_id,
    weight_class_id,
    tournament_id
  } = req.body;
  //wrestler id?
  let wrestler1_Data, wrestler2_Data;
  //search info for wrestler 1 and 2 insert into bracketmatches
  // add first name, last name
  tournaments.InsertBracketMatches();
});

router.post("/test", (req, res) => {
  const { wrestleridArray, weight_class_id, tournament_id } = req.body;
  //wrestler id?
  let wrestler1Data, wrestler2Data;
  for (let i = 0; i < wrestleridArray.length; i++) {
    search.SearchWrestler([wrestleridArray[i]]).then(searchResults => {});
  }
  let wrestler1_Data, wrestler2_Data;
  //search info for wrestler 1 and 2 insert into bracketmatches
  // add first name, last name
  tournaments.InsertBracketMatches();
});

module.exports = router;
