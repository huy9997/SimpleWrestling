require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const endpoints = require("./endpoints");

const session = require("express-session");
const cookieParser = require("cookie-parser");

const passport = require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.use("/api", endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
