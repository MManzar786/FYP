const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const express = require("express");
var app = express();

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
passport.use(
  new LinkedInStrategy(
    {
      //options for LinkedInStrategy
      clientID: "8652637l7lncg9",
      clientSecret: "fBNfRGXfe1bGBd3p",
      callbackURL: "http://localhost:5000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"]
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...

      process.nextTick(function() {
        // To keep the example simple, the user's LinkedIn profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the LinkedIn account with a user record in your database,
        // and return that user instead.
        // console.log("redirect URI calleds");
        console.log(profile.email);
        console.log(profile.displayName);

        // console.log(accessToken);
        console.log(profile.id);
        console.log(profile.photos[0].value);
        return done(null, profile);
      });
    }
  )
);
