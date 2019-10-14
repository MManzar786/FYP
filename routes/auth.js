const express = require("express");
const router = express.Router();
const auth = require("../src/middleware/auth");
const User = require("../models/registerModel");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
router.get("/login", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// @route POST api/auth
// @desc Authenticate user & get token
//@access  Public

router.post(
  "/login",
  [
    check("cnic", "cnic is required")
      .not()
      .isEmpty(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { cnic, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      //check if user exists
      let user = await User.findOne({ cnic });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payLoad = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payLoad,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // res.status(201).send("user registered");
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
