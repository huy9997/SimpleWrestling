require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const endpoints = require("./endpoints");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const passport = require("passport");
require("./config/passport")(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/api", endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
