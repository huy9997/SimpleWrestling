let express = require("express");
let router = express.Router();
let passport = require("passport");

router.post("/", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
});

module.exports = router;
