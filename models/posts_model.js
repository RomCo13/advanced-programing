const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  senderId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;
