const express = require("express");
const {
  getOnePost,
  getAllPosts,
  createPost,
  updateOnePost,
  deleteOnePost,
} = require("../controllers/posts");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", protect, getAllPosts);
router.get("/:id", protect, getOnePost);
router.post("/", protect, createPost);
router.put("/:id", protect, updateOnePost);
router.delete("/:id", protect, deleteOnePost);

module.exports = router;
