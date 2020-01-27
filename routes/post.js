const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../src/middleware/auth");

// models
const User = require("./../models/user");
const Profile = require("./../models/profile");
const Post = require("./../models/post");

// post private route
// jobs posting
router.post(
  "/jobs",
  [
    auth,
    [
      check("text", "Text is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const profile = await Profile.find({ user: user._id });
      console.log(profile);

      const newPost = new Post({
        text: req.body.text,
        name: profile[0].name,
        avatar: user.avatar,
        email: profile[0].emailId,
        user: req.user.id
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// get all jobs
// private
router.get("/jobs", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// get job by Id
// private
router.get("/jobs/:id", auth, async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id).sort({ date: -1 });

    if (!posts) {
      res.status(404).json({ msg: "Job not found" });
    }
    res.json(posts);
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      res.status(404).json({ msg: "Job not found" });
    }
    res.status(500).send("Server Error");
  }
});

// delete a jobs
// private
router.delete("/jobs/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json({ msg: "Job not found" });
    }

    // check user
    if (post.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "User Not Authorized" });
    }
    await post.remove();
    res.json({ msg: "Job has been removed" });
  } catch (err) {
    console.log(err.message);
    if (err.kind === "ObjectId") {
      res.status(404).json({ msg: "Job not found" });
    }
    res.status(500).send("Server Error");
  }
});

// post comments
// jobs posting
router.post(
  "/comment/:id",
  [
    auth,
    [
      check("text", "Text is Required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const profile = await Profile.find({ user: user._id });
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: profile[0].name,
        avatar: user.avatar,
        user: req.user.id
      };

      console.log(newComment);
      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// delete comments
// jobs posting

router.delete("/jobs/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "comment does not exist" });
    }

    // check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User Not authorize" });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
