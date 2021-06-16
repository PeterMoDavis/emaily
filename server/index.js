//CLIENT ID: 346916511886-5jr0ul8j3lt9c5q4kmhqujhn3ajhef85.apps.googleusercontent.com
//CLIENT SECRET: etYffbw679BTNLOpbkonXeHT

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oath20").Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("way to go champ! 🤡");
});
