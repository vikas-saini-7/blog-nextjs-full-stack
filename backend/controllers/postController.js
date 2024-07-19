const { find, findById } = require("../model/categoryModel");
const Post = require("../model/postModel");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

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
    const {
      title,
      content,
      author = "Vikas Saini",
      category,
      image = "https://strapi.dhiwise.com/uploads/Blog_Common_Image_Next_OG_Image_8ab5e85f77.png",
    } = req.body;

    const newPost = new Post({ title, content, author, category, image });

    const savedPost = await newPost.save();

    res.status(200).json({
      status: "success",
      results: savedPost,
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
    const post = await Post.findById(id);

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
