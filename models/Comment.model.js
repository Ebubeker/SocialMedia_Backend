const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_made_id: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comments", comment);

module.exports = Comment;
