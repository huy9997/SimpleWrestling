let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.json("secure page");
});

router.post("/", (req, res) => {
  let active;
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
});

module.exports = router;
