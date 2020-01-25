const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get("/search", async (req, res) => {
  try {
    // console.log(req.query.search);
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      Profile.find({ name: regex }, function(err, foundprofiles) {
        if (err) {
          console.log(err);
        } else {
          return res.send(foundprofiles);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
