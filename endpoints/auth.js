let express = require("express");
let router = express.Router();
let passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/signup",
    failureRedirect: "/login",
    failureFlash: true
  }),
    res.json("sending response"),
    (req, res, next);
});
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/login");
});

module.exports = router;
