const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    activity: {
      likes: {
        type: Number,
      },
      usersLiking: [
        {
          type: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", post);

module.exports = Post;
