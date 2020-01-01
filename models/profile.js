const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String
  },
  emailId: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String
  },
  address: {
    type: String
  },
  degree: {
    type: String,
    required: true
  },
  passingYear: {
    type: String,
    required: true
  },
  jobStatus: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
