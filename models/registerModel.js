const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  cnic: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// RegisterSchema.pre("save", async function(next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

// RegisterSchema.methods.toJSON = function() {
//   const user = this;
//   const userObject = user.toObject();

//   delete userObject.password;
//   delete userObject.tokens;

//   return userObject;
// };

// RegisterSchema.methods.generateAuthToken = async function() {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toString() }, "userauth");
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

// RegisterSchema.statics.findByCredentials = async (cnic, password) => {
//   const user = await User.findOne({ cnic });
//   if (!user) {
//     throw new Error("unable to login");
//   }
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("unable to login");
//   }
//   return user;
// };
const User = mongoose.model("user", RegisterSchema);
module.exports = User;
