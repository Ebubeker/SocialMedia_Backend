const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    activity: {
      followers: Number,
      followerUsers: Array,
      following: Number,
      followingUsers: Array,
      Likes: Number,
    },
  },
  { timestamps: true }
);

const userReg = mongoose.model("Users", user);

module.exports = userReg;
