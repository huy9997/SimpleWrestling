let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.json("secure page");
});

module.exports = router;
