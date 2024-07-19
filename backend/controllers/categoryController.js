const Category = require("../model/categoryModel");

exports.getAllCategories = async (req, res) => {
  try {
    const Categories = await Category.find();
    console.log(Categories);
    res.status(200).json({
      status: "success",
      results: Categories,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error in getting all categories",
    });
  }
};

exports.getCategoryById = async (req, res) => {
  res.send("/:id");
};

exports.createCategory = async (req, res) => {
  try {
    const { name, postIds = [] } = req.body;

    const newCategory = new Category({ name, postIds });
    const createdCategory = await newCategory.save();

    res.status(200).json({
      status: "success",
      results: createdCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: `Error creating category. Please try again later. ${error.message}`,
    });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate("posts");

    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    res.status(200).json({
      status: "success",
      results: category,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error getting category. Please try again later. ${error.message}`,
    });
  }
};
