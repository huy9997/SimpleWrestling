let express = require("express");
let router = express.Router();
let passport = require("passport");

router.post("/", (req, res, next) => {
  console.log;
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
});

module.exports = router;
