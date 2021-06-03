const Post = require("../models/posts");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res
      .status(200)
      .json({ status: "success", data: posts, results: posts.length });
  } catch (error) {
    return res.status(500).json({ status: "Failure" });
  }
};

exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ status: "Failure", message: "Not found" });
    }
    return res.status(200).json({ status: "success", data: post });
  } catch (error) {
    return res.status(500).json({ status: "Failure" });
  }
};
exports.createPost = async (req, res) => {
  console.log("CREATING POST")
  console.log(req.body)
  try {
    const post = await Post.create(req.body);

    return res.status(200).json({ status: "success", data: post });
  } catch (error) {
    console.log(error, "ERROR")
    return res.status(500).json({ status: "Failure" });
  }
};

exports.updateOnePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({ status: "Failure", message: "Not found" });
    }
    return res.status(200).json({ status: "success", data: post });
  } catch (error) {
    return res.status(500).json({ status: "Failure" });
  }
};
exports.deleteOnePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ status: "Failure", message: "Not found" });
    }
    return res.status(200).json({ status: "success", data: post });
  } catch (error) {
    return res.status(500).json({ status: "Failure" });
  }
};
