const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    useSend: {
      type: String,
      required: true,
    },
    userRecieved: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Messages", message);

module.exports = Message;
