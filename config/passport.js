const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const search = require("../db/search");

passport.serializeUser((user, callback) => callback(null, user.id));

passport.deserializeUser((id, callback) => {
  db.one(`SELECT * FROM users WHERE id = ${id}`)
    .then(user => callback(null, user))
    .catch(err => callback(err));
});
passport.use(
  "local",
  new LocalStrategy((email, password, callback) => {
    search
      .SearchEmail(email)
      .then(user => {
        console.log(user, "user in passport");
        if (!user) return callback(null, false, { message: "Incorrect email" });
        if (!bcrypt.compareSync(password, user.password)) {
          return callback(null, false, { messasge: "Incorrect password" });
        }
        return callback(null, user);
      })
      .catch(err => {
        callback("their was a an error login please try again");
      });
  })
);

module.exports = passport;
