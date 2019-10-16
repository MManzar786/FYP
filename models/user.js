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

const User = mongoose.model("user", RegisterSchema);
module.exports = User;
