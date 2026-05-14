const express = require("express");
const router = express.Router();

const controller = require("../controllers/postsController");
const validatePost = require("../middleware/validatePost");

// CRUD
router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPostById);
router.post("/", validatePost, controller.createPost);
router.put("/:id", validatePost, controller.updatePost);
router.delete("/:id", controller.deletePost);

// Engagement features
router.patch("/:id/like", controller.likePost);

// Comments system
router.get("/:id/comments", controller.getComments);
router.post("/:id/comments", controller.addComment);
router.delete("/:postId/comments/:commentId", controller.deleteComment);

module.exports = router;
