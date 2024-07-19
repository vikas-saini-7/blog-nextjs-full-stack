require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./connection/mongoConnect");

const catogoryRoutes = require("./routes/categoryRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

// connect to mongoDB
connectDB();

// middlewares
app.use(cors());

// Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/categories", catogoryRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Working!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
