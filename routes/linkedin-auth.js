const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  res.send("Linked In Auth error");
});

router.get("/login", (req, res) => {
  console.log(req.headers);
  res.redirect("http://localhost:3000/create-profile");
});

router.get("/linkedin", passport.authenticate("linkedin"));

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/auth/login",
    failureRedirect: "/auth/logout"
  })
);

module.exports = router;
