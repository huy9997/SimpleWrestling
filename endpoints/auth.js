let express = require("express");
let router = express.Router();
let passport = require("passport");
router.post("/", (req, res, next) => {
  passport.authenticate("local", function(req, res) {
    console.log(res, "request");
    console.log(req, "response");
  })(req, res, next);
});

module.exports = router;
