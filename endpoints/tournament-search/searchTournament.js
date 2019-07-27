let express = require("express");
let router = express.Router();
let searchDB = require("../db/search");

router.post("/", (req, res) => {
  let { search } = req.body;
  console.log(search);
  search = "%" + search + "%";
  searchDB
    .SearchTournament([search])
    .then(searchCardDataResults => {
      res.json(searchCardDataResults);
    })
    .catch(err => {
      res.json("error in searching for a tournament");
    });
});

module.exports = router;
