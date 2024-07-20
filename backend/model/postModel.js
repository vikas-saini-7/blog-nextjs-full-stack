const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

// postSchema.virtual("excerpt").get(function () {
//   const excerptLength = 100; // Adjust length as needed
//   return this.content.substring(0, excerptLength).trim();
// });

module.exports = mongoose.model("Post", postSchema);
