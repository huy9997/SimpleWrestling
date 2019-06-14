const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const search = require("../db/search");

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  passport.use(
    "local",
    new LocalStrategy(
      { usernameField: "email" },
      (email, password, callback) => {
        console.log(email, "email is passpor");
        search
          .SearchUniqueEmail([email])
          .then(user => {
            if (user[0].email != email)
              return callback(null, false, { message: "Incorrect email" });
            if (!bcrypt.compareSync(password, user[0].password)) {
              return callback(null, false, { messasge: "Incorrect password" });
            }
            return callback(null, user);
          })
          .catch(err => {
            callback("their was a an error login please try again");
          });
      }
    )
  );
};
