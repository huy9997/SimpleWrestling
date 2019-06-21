let express = require("express");
let router = express.Router();
let passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function(req, res) {
    const { id, first_name, last_name, type_of_account } = req.user[0];
    const values = ["successLogin", id, first_name, last_name, type_of_account];
    res.json(values);
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/login");
});

module.exports = router;
