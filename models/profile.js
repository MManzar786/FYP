const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  skills: {
    type: [String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String
  }
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
