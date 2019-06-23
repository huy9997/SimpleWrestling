let express = require("express");
let router = express.Router();
let search = require("../db/search");

router.post("/", (req, res) => {
  const { search } = req.body;
});

module.exports = router;
