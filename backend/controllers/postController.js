const Category = require("../model/categoryModel");
const { find, findById } = require("../model/categoryModel");
const Post = require("../model/postModel");

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
    const {
      title,
      content,
      description,
      author = "Vikas Saini",
      categories,
      image = "https://strapi.dhiwise.com/uploads/Blog_Common_Image_Next_OG_Image_8ab5e85f77.png",
    } = req.body;

    const categoryObjs = await Category.find({ _id: { $in: categories } });

    // if (categoryObjs.length !== categories.length) {
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "One or more categories not found",
    //   });
    // }

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
