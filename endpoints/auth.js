let express = require("express");
let router = express.Router();

let auth = passport => {
  router.post(
    "/",
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/"
    }),
    function(req, res) {
      res.send("successful login ");
    }
  );
};

module.exports = auth;
