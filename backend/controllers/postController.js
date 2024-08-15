const Category = require("../model/categoryModel");
const { find, findById } = require("../model/categoryModel");
const Post = require("../model/postModel");
const { upload } = require("../utils/multer");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("categories");

    res.status(200).json({
      status: "success",
      results: posts,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error in getting all posts ${error.message}`,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(500).json({
          status: "fail",
          message: `Error in uploading image: ${err.message}`,
        });
      }

      const {
        title,
        content,
        description,
        author = "Vikas Saini",
        categories,
      } = req.body;

      const image = req.file.path;

      const newPost = new Post({
        title,
        content,
        description,
        author,
        categories,
        image,
      });

      const savedPost = await newPost.save();

      // Update the posts array of each category
      await Category.updateMany(
        { _id: { $in: categories } },
        { $push: { posts: savedPost._id } }
      );

      res.status(200).json({
        status: "success",
        results: savedPost,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error in creating post ${error.message}`,
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("categories");

    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post with this id does now exist",
      });
    }

    res.status(200).json({
      status: "success",
      results: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error in geting post by id ${error.message}`,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({
        status: "fail",
        message: "Post with this id does now exist",
      });
    }

    // Remove the post from all categories
    await Category.updateMany({ posts: id }, { $pull: { posts: id } });

    res.status(200).json({
      status: "success",
      results: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error in deleting post ${error.message}`,
    });
  }
};
