require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./connection/mongoConnect");

const catogoryRoutes = require("./routes/categoryRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

// connect to mongoDB
connectDB();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("api/category", catogoryRoutes);

app.get("/", (req, res) => {
  res.send("Working!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
