const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Post Must have title"],
    required: true,
  },
  body: {
    type: String,
    require: [true, "Post must have a body"],
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
