const express = require("express");
const User = require("../models/user");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = new express.Router();

router.post(
  "/users/register",
  [
    check("cnic", "CNIC is Required")
      .not()
      .isEmpty(),
    check("password", "Password must be a lenght of 6").isLength({
      min: 6
    })
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
      if (user) {
        return res
          .status(403)
          .json({ error: [{ msg: "User Already Exists" }] });
      }
      //gravatar
      const avatar = gravatar.url(cnic, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      user = new User({
        cnic,
        password,
        avatar,
        password
      });
      //bcrypt
      const salt = await bcrypt.genSalt(8);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
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
