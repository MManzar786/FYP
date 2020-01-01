const express = require("express");
const router = express.Router();
const auth = require("..//src/middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../models/profile");
const User = require("../models/user");

//route     GET /profile/me
//@desc     Get current profile token
//@access   Private

router.get("/profile/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no Profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//route     POST /profile/me
//@desc     update and create user profile
//@access   Private

router.post(
  "/profile",
  [
    auth,
    [
      check("name", "Name is Required")
        .not()
        .isEmpty(),
      check("emailId", "emailId is Required")
        .not()
        .isEmpty(),
      check("degree", "Degree is Required")
        .not()
        .isEmpty(),
      check("passingYear", "Passing Year is Required")
        .not()
        .isEmpty(),
      check("jobStatus", "Job Status is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      fatherName,
      emailId,
      mobileNo,
      address,
      degree,
      passingYear,
      jobStatus
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (fatherName) profileFields.fatherName = fatherName;
    if (emailId) profileFields.emailId = emailId;
    if (mobileNo) profileFields.mobileNo = mobileNo;
    if (address) profileFields.address = address;
    if (degree) profileFields.degree = degree;
    if (passingYear) profileFields.passingYear = passingYear;
    if (jobStatus) profileFields.jobStatus = jobStatus;

    // console.log(profileFields.user);
    // res.send("lala");
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      //update
      if (profile) {
        console.log("user updated");
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        res.send(profile);
      }
      //Create
      //   console.log(req.user.id);
      else {
        profile = new Profile(profileFields);
        console.log("user profile created");

        await profile.save();
        return res.send(profile);
      }
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
