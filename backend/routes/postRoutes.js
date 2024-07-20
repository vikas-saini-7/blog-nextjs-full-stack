const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);

router.get("/:id", postController.getPostById);
router.delete("/:id", postController.deletePost);

module.exports = router;
